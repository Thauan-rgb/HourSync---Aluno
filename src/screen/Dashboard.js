import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, ActivityIndicator, Text } from 'react-native';
import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import DashboardHeader from '../components/DashboardHeader';
import StatsCards from '../components/StatsCards';
import ActivityList from '../components/ActivityList';
import { useAuth } from '../contexto/AuthContext';
import { listarCertificados } from '../api/certificados';
import { listarCursos } from '../api/cursos';

export default function Dashboard({ navigation }) {
  const { token, usuario } = useAuth();
  const [cursos, setCursos] = useState([]);
  const [cursoKey, setCursoKey] = useState(null);
  const [open, setOpen] = useState(false);
  const [carregando, setCarregando] = useState(true);
  const [dadosPorCurso, setDadosPorCurso] = useState({});

  useFocusEffect(
    useCallback(() => {
      carregarDados();
    }, [token, usuario])
  );

  async function carregarDados() {
    try {
      setCarregando(true);

      const [todosCerts, todosCursos] = await Promise.all([
        listarCertificados(token),
        listarCursos(token),
      ]);

      // certificados do aluno logado
      const certDoAluno = Array.isArray(todosCerts)
        ? todosCerts.filter((c) => {
            const id = c.alunoId?._id || c.alunoId;
            return id === usuario?.id || id === usuario?._id;
          })
        : [];

      // cursos que o aluno está matriculado via usuario.cursoId
      const cursoIdsDoAluno = usuario?.cursoId || [];
      const cursosDoAluno = Array.isArray(todosCursos)
        ? todosCursos.filter((c) =>
            cursoIdsDoAluno.some(
              (id) => id?.toString() === c._id?.toString()
            )
          )
        : [];

      // monta o mapa de dados por curso
      const cursosMap = {};
      cursosDoAluno.forEach((curso) => {
        const certs = certDoAluno.filter((c) => {
          const cid = c.cursoId?._id || c.cursoId;
          return cid?.toString() === curso._id?.toString();
        });

        const aprovadas = certs
          .filter((c) => c.status === 'APROVADO')
          .reduce((acc, c) => acc + (c.horasAprovadas || c.horas || 0), 0);

        cursosMap[curso._id] = {
          nome: curso.nome,
          meta: curso.horasExigidas || 0,
          aprovadas,
          pendentes: certs.filter((c) => c.status === 'PENDENTE').length,
          rejeitadas: certs.filter((c) => c.status === 'REJEITADO').length,
          atividades: certs.map((c) => ({
                  id: c._id,
            nome: c.titulo,
            horas: `${c.horas}h`,
            cat: c.categoriaId?.nome || '—',
            status:
              c.status === 'APROVADO'
                ? 'Aprovado'
                : c.status === 'REJEITADO'
                ? 'Rejeitado'
                : 'Pendente',
          })),
        };
      });

      setDadosPorCurso(cursosMap);

      const primeiroId = Object.keys(cursosMap)[0] || null;
      setCursoKey((prev) => (prev && cursosMap[prev] ? prev : primeiroId));
      setCursos(todosCursos);
    } catch (e) {
      console.warn('Erro ao carregar dashboard:', e);
    } finally {
      setCarregando(false);
    }
  }

  if (carregando) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#56C3DC" />
      </View>
    );
  }

  if (!cursoKey) {
    return (
      <View style={styles.loading}>
        <Text style={{ color: '#888' }}>Nenhum curso encontrado.</Text>
      </View>
    );
  }

  const curso = dadosPorCurso[cursoKey];

  const CURSOS_DISPLAY = {};
  cursos.forEach((c) => {
    if (dadosPorCurso[c._id]) CURSOS_DISPLAY[c._id] = dadosPorCurso[c._id];
  });

  return (
    <View style={styles.root}>
      <ScrollView style={styles.wrapper} contentContainerStyle={styles.container}>
        <DashboardHeader
          navigation={navigation}
          curso={curso}
          cursoKey={cursoKey}
          open={open}
          setOpen={setOpen}
          CURSOS={CURSOS_DISPLAY}
          setCursoKey={setCursoKey}
        />

        <View style={styles.content}>
          <StatsCards curso={curso} />
          <ActivityList atividades={curso.atividades} />
        </View>

        <StatusBar style="light" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#fff' },
  wrapper: { flex: 1 },
  container: { flexGrow: 1 },
  loading: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  content: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    marginTop: -28,
    padding: 20,
    paddingTop: 24,
  },
});
            id: c._i
