import { useState, useCallback } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';

import Header from '../components/headerCertificados';
import ListaCertificados from '../components/cardCertificados';
import styles from '../styles/certificadosStyles';
import { useAuth } from '../contexto/AuthContext';
import { listarCertificados } from '../api/certificados';

const FILTROS = ['Todos', 'Pendentes', 'Rejeitados', 'Aprovados'];
const STATUS_MAP = { Pendentes: 'PENDENTE', Rejeitados: 'REJEITADO', Aprovados: 'APROVADO' };

export default function CertificadosScreen() {
  const { token, usuario } = useAuth();
  const [todos, setTodos] = useState([]);
  const [busca, setBusca] = useState('');
  const [filtroAtivo, setFiltroAtivo] = useState('Todos');
  const [carregando, setCarregando] = useState(true);

  useFocusEffect(
    useCallback(() => {
      carregar();
    }, [token, usuario])
  );

  async function carregar() {
    try {
      setCarregando(true);
      const data = await listarCertificados(token);
      const meus = Array.isArray(data)
        ? data.filter((c) => {
            const id = c.alunoId?._id || c.alunoId;
            return id === usuario?.id || id === usuario?._id;
          })
        : [];
      setTodos(meus);
    } catch {
      /* silencioso */
    } finally {
      setCarregando(false);
    }
  }

  const filtrados = todos.filter((c) => {
    const statusOk = filtroAtivo === 'Todos' || c.status === STATUS_MAP[filtroAtivo];
    const buscaOk = !busca || c.titulo?.toLowerCase().includes(busca.toLowerCase());
    return statusOk && buscaOk;
  });

  const contagem = {
    Todos: todos.length,
    Pendentes: todos.filter((c) => c.status === 'PENDENTE').length,
    Rejeitados: todos.filter((c) => c.status === 'REJEITADO').length,
    Aprovados: todos.filter((c) => c.status === 'APROVADO').length,
  };

  const CHIP_CORES = {
    Todos: '#4A90E2',
    Pendentes: '#FABB05',
    Rejeitados: '#EA4335',
    Aprovados: '#34A853',
  };
  const CHIP_ICONS = {
    Pendentes: 'time',
    Rejeitados: 'close-circle',
    Aprovados: 'checkmark-circle',
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.body}>
        <View style={localStyles.searchRow}>
          <View style={localStyles.searchInputBox}>
            <Ionicons name="search" size={18} color="#999" />
            <TextInput
              style={localStyles.searchInput}
              placeholder="Buscar certificado"
              placeholderTextColor="#999"
              value={busca}
              onChangeText={setBusca}
            />
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={localStyles.chipScroll} contentContainerStyle={localStyles.chipContainer}>
          {FILTROS.map((f) => {
            const cor = CHIP_CORES[f];
            const ativo = filtroAtivo === f;
            return (
              <TouchableOpacity
                key={f}
                style={[localStyles.chip, { borderColor: cor, backgroundColor: ativo ? cor + '22' : '#fff' }]}
                onPress={() => setFiltroAtivo(f)}
              >
                {CHIP_ICONS[f] && <Ionicons name={CHIP_ICONS[f]} size={14} color={cor} />}
                <Text style={[localStyles.chipText, { color: cor }]}>{f} {contagem[f]}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {carregando ? (
          <ActivityIndicator color="#56C3DC" style={{ marginTop: 40 }} />
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            {filtrados.length === 0 && (
              <Text style={{ textAlign: 'center', color: '#999', marginTop: 40 }}>
                Nenhum certificado encontrado.
              </Text>
            )}
            {filtrados.map((c) => (
              <ListaCertificados
                key={c._id}
                tipo={c.status === 'APROVADO' ? 'aprovado' : c.status === 'REJEITADO' ? 'rejeitado' : 'pendente'}
                titulo={c.titulo}
                categoria={c.categoriaId?.nome || '—'}
                dataEnvio={`Enviado em ${c.criadoEm ? new Date(c.criadoEm).toLocaleDateString('pt-BR') : '—'}`}
                horas={c.status === 'APROVADO' ? `${c.horasAprovadas || c.horas}h validadas` : `${c.horas}h solicitadas`}
                dataAprovacao={
                  c.status === 'APROVADO'
                    ? `Aprovado`
                    : c.status === 'REJEITADO'
                    ? `Rejeitado`
                    : 'Aguardando análise'
                }
              />
            ))}
            <View style={{ height: 40 }} />
          </ScrollView>
        )}
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  searchRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  searchInputBox: {
    flex: 1, flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#fff', borderWidth: 1, borderColor: '#E0E0E0',
    borderRadius: 8, paddingHorizontal: 12, height: 44,
  },
  searchInput: { flex: 1, marginLeft: 8, fontSize: 14, color: '#333' },
  chipScroll: { flexGrow: 0, marginBottom: 20 },
  chipContainer: { gap: 8, paddingRight: 20 },
  chip: {
    flexDirection: 'row', alignItems: 'center', borderWidth: 1.5,
    borderRadius: 20, paddingVertical: 6, paddingHorizontal: 12, gap: 4,
  },
  chipText: { fontWeight: 'bold', fontSize: 13 },
});
