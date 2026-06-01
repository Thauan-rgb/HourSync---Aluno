import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useState } from 'react';

import DashboardHeader from '../components/DashboardHeader';
import StatsCards from '../components/StatsCards';
import ActivityList from '../components/ActivityList';

const CURSOS = {
  ads: {
    nome: 'Análise e Desenvolvimento de Sistemas',
    meta: 100,
    aprovadas: 70,
    pendentes: 5,
    rejeitadas: 3,
    atividades: [
      { id: 1, nome: 'Curso de Python Avançado', horas: '20h', cat: 'Pesquisa de extensão', status: 'Aprovado' },
      { id: 2, nome: 'Workshop de UX Design', horas: '5h', cat: 'Cultura e artes', status: 'Pendente' },
      { id: 3, nome: 'Palestra de Empreendedorismo', horas: '3h', cat: 'Empreendedorismo', status: 'Rejeitado' },
    ],
  },
  jogos: {
    nome: 'Jogos Digitais',
    meta: 80,
    aprovadas: 20,
    pendentes: 10,
    rejeitadas: 5,
    atividades: [
      { id: 1, nome: 'Game Jam Recife 2024', horas: '12h', cat: 'Produção cultural', status: 'Aprovado' },
      { id: 2, nome: 'Workshop Unity 3D', horas: '10h', cat: 'Capacitação técnica', status: 'Pendente' },
      { id: 3, nome: 'Maratona de Programação', horas: '5h', cat: 'Competição', status: 'Rejeitado' },
    ],
  },
};

export default function Dashboard({ navigation }) {
  const [cursoKey, setCursoKey] = useState('ads');
  const [open, setOpen] = useState(false);
  const curso = CURSOS[cursoKey];

  return (
    <View style={styles.root}>
      <ScrollView style={styles.wrapper} contentContainerStyle={styles.container}>

        <DashboardHeader
          navigation={navigation}
          curso={curso}
          cursoKey={cursoKey}
          open={open}
          setOpen={setOpen}
          CURSOS={CURSOS}
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
  content: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    marginTop: -28,
    padding: 20,
    paddingTop: 24,
  },
});
