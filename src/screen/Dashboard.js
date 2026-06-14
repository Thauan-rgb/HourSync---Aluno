import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { useState, useCallback } from 'react';
import { useFocusEffect, DrawerActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Circle } from 'react-native-svg';

import { useAuth } from '../contexto/AuthContext';
import { listarCertificados } from '../api/certificados';
import { listarCursos } from '../api/cursos';

const RAIO = 58;
const CIRC = 2 * Math.PI * RAIO;

const STATUS_CONFIG = {
  Aprovado:  { bg: '#E8F5E9', color: '#2E7D32', icon: 'checkmark-circle' },
  Pendente:  { bg: '#FFF8E1', color: '#F57F17', icon: 'time'             },
  Rejeitado: { bg: '#FFEBEE', color: '#C62828', icon: 'close-circle'     },
};

export default function Dashboard({ navigation }) {
  const { token, usuario } = useAuth();
  const [cursoKey, setCursoKey] = useState(null);
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

      const certDoAluno = Array.isArray(todosCerts)
        ? todosCerts.filter((c) => {
            const id = c.alunoId?._id || c.alunoId;
            return id === usuario?.id || id === usuario?._id;
          })
        : [];

      const cursoIdsDoAluno = (usuario?.cursoId || []).map((c) =>
        (c._id || c)?.toString()
      );

      const cursosDoAluno =
        cursoIdsDoAluno.length > 0
          ? (Array.isArray(todosCursos)
              ? todosCursos.filter((c) => cursoIdsDoAluno.includes(c._id?.toString()))
              : [])
          : (Array.isArray(todosCursos) ? todosCursos : []);

      const cursosMap = {};
      cursosDoAluno.forEach((curso) => {
        const certs = certDoAluno.filter((c) => {
          const cid = c.cursoId?._id || c.cursoId;
          return cid?.toString() === curso._id?.toString();
        });

        const aprovadas = certs
          .filter((c) => c.status === 'APROVADO')
          .reduce((acc, c) => acc + (c.horasAprovadas || c.horas || 0), 0);

        const somarHoras = (status) =>
          certs
            .filter((c) => c.status === status)
            .reduce((acc, c) => acc + (c.horas || 0), 0);

        cursosMap[curso._id] = {
          nome: curso.nome,
          meta: curso.horasExigidas || 0,
          aprovadas,
          pendentes: somarHoras('PENDENTE'),
          rejeitadas: somarHoras('REJEITADO'),
          atividades: certs.map((c) => ({
            id: c._id,
            nome: c.titulo,
            horas: ${c.horas}h,
            cat: c.categoriaId?.nome || '—',
            status:
              c.status === 'APROVADO' ? 'Aprovado'
              : c.status === 'REJEITADO' ? 'Rejeitado'
              : 'Pendente',
          })),
        };
      });

      setDadosPorCurso(cursosMap);
      const primeiroId = Object.keys(cursosMap)[0] || null;
      setCursoKey((prev) => (prev && cursosMap[prev] ? prev : primeiroId));
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
  const cursoEntries = Object.entries(dadosPorCurso);
  const aprovadas = curso.aprovadas || 0;
  const meta = curso.meta || 1;
  const offset = Math.max(0, CIRC - (aprovadas / meta) * CIRC);

  return (
    <View style={styles.root}>
      <ScrollView style={styles.wrapper} contentContainerStyle={styles.container}>

        <View style={styles.header}>

          <View style={styles.nav}>
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Ionicons name="menu-outline" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.navTitle}>HourSync</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Notificacoes')}>
              <Ionicons name="notifications-outline" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.tabsContent}
            style={styles.tabsScroll}
          >
            {cursoEntries.map(([key, c]) => (
              <TouchableOpacity
                key={key}
                style={[styles.tab, cursoKey === key && styles.tabActive]}
                onPress={() => setCursoKey(key)}
              >
                <Text style={[styles.tabText, cursoKey === key && styles.tabTextActive]}
                  numberOfLines={1}>
                  {c.nome}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View style={styles.ringWrap}>
            <Svg width={150} height={150} viewBox="0 0 150 150">
              <Circle cx={75} cy={75} r={RAIO} fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth={12} />
              <Circle
                cx={75} cy={75} r={RAIO}
                fill="none" stroke="#fff" strokeWidth={12}
                strokeDasharray={${CIRC}}
                strokeDashoffset={offset}
                strokeLinecap="round"
                rotation={-90} origin="75,75"
              />
            </Svg>
            <View style={styles.ringCenter}>
              <Text style={styles.ringValue}>{aprovadas}H</Text>
              <Text style={styles.ringTotal}>/{meta}h</Text>
            </View>
          </View>

        </View>

        <View style={styles.content}>

          <View style={styles.cardsGrid}>
            <View style={[styles.card, styles.cardBlue]}>
              <Text style={[styles.cardLabel, { color: '#185FA5' }]}>Horas totais</Text>
              <Text style={[styles.cardValue, { color: '#0C447C' }]}>{curso.aprovadas}h</Text>
            </View>
            <View style={[styles.card, styles.cardAmber]}>
              <Text style={[styles.cardLabel, { color: '#854F0B' }]}>Pendentes</Text>
              <Text style={[styles.cardValue, { color: '#633806' }]}>{curso.pendentes}h</Text>
            </View>
            <View style={[styles.card, styles.cardTeal]}>
              <Text style={[styles.cardLabel, { color: '#0F6E56' }]}>Horas restantes</Text>
              <Text style={[styles.cardValue, { color: '#085041' }]}>{Math.max(0, curso.meta - curso.aprovadas)}h</Text>
            </View>
            <View style={[styles.card, styles.cardRed]}>
              <Text style={[styles.cardLabel, { color: '#A32D2D' }]}>Rejeitados</Text>
              <Text style={[styles.cardValue, { color: '#791F1F' }]}>{curso.rejeitadas}h</Text>
            </View>
          </View>

          {(!curso.atividades || curso.atividades.length === 0) ? (
            <Text style={styles.empty}>Nenhuma atividade enviada ainda.</Text>
          ) : (
            <View>
              <Text style={styles.sectionTitle}>Atividades recentes</Text>
              {curso.atividades.map((item, index) => {
                const config = STATUS_CONFIG[item.status] || STATUS_CONFIG.Pendente;
                const isLast = index === curso.atividades.length - 1;
                return (
                  <View
                    key={item.id}
                    style={[styles.activityRow, !isLast && styles.activityBorder]}
                  >
                    <View style={[styles.actIcon, { backgroundColor: config.bg }]}>
                      <Ionicons name={config.icon} size={18} color={config.color} />
                    </View>
                    <View style={styles.actBody}>
                      <Text style={styles.actName} numberOfLines={1}>{item.nome}</Text>
                      <Text style={styles.actMeta}>{item.cat}</Text>
                    </View>
                    <View style={[styles.badge, { backgroundColor: config.bg }]}>
                      <Text style={[styles.badgeText, { color: config.color }]}>
                        {item.horas}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          )}
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

  header: {
    backgroundColor: '#54C1DD',
    paddingTop: 52,
    paddingBottom: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 16,
  },
  navTitle: { fontSize: 17, fontWeight: '600', color: '#fff' },

  tabsScroll: { flexGrow: 0, marginBottom: 20 },
  tabsContent: { gap: 8, paddingHorizontal: 4 },
  tab: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
    backgroundColor: 'rgba(255,255,255,0.15)',
    maxWidth: 180,
  },
  tabActive: {
    backgroundColor: '#fff',
  },
  tabText: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.85)',
    fontWeight: '500',
  },
  tabTextActive: {
    color: '#54C1DD',
    fontWeight: '700',
  },

  ringWrap: { alignItems: 'center', justifyContent: 'center' },
  ringCenter: { position: 'absolute', alignItems: 'center' },
  ringValue: { fontSize: 32, fontWeight: '700', color: '#fff' },
  ringTotal: { fontSize: 13, color: 'rgba(255,255,255,0.75)', marginTop: 2 },

  cardsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 20 },
  card: { width: '47.5%', borderRadius: 12, padding: 14, gap: 4 },
  cardBlue:  { backgroundColor: '#E6F1FB' },
  cardAmber: { backgroundColor: '#FAEEDA' },
  cardTeal:  { backgroundColor: '#E1F5EE' },
  cardRed:   { backgroundColor: '#FCEBEB' },
  cardLabel: { fontSize: 12, fontWeight: '500' },
  cardValue: { fontSize: 22, fontWeight: '700' },

  sectionTitle: {
    fontSize: 15, fontWeight: '600', color: '#222',
    marginBottom: 8, marginTop: 8,
  },
  empty: { fontSize: 13, color: '#999', textAlign: 'center', marginTop: 20 },
  activityRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, gap: 12 },
  activityBorder: { borderBottomWidth: 0.5, borderBottomColor: '#EBEBEB' },
  actIcon: { width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  actBody: { flex: 1 },
  actName: { fontSize: 13, fontWeight: '500', color: '#222' },
  actMeta: { fontSize: 11, color: '#888', marginTop: 2 },
  badge: { borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4 },
  badgeText: { fontSize: 11, fontWeight: '500' },
});
    
