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
            id: c._i
