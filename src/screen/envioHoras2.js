import { View, ScrollView, Alert } from 'react-native';
import { useState } from 'react';
import Header from '../components/Header';
import SubmitButton from '../components/SubmitButton';
import ReviewBanner from '../components/ReviewBanner';
import ActivityCard from '../components/ActivityCard';
import styles from '../styles/envioHorasStyles';
import { useAuth } from '../contexto/AuthContext';
import { criarCertificado } from '../api/certificados';

export default function EnvioHoras2Screen({ navigation, route }) {
  const { token, usuario } = useAuth();
  const dados = route.params || {};
  const [carregando, setCarregando] = useState(false);

  async function handleEnviar() {
    if (!dados.cursoId || !dados.categoriaId) {
      Alert.alert('Erro', 'Dados incompletos. Volte e preencha o formulário.');
      return;
    }

    setCarregando(true);
    try {
      const resultado = await criarCertificado(
        {
          titulo: dados.categoriaNome || 'Certificado',
          horas: Number(dados.horas) || 0,
          alunoId: usuario?.id || usuario?._id,
          categoriaId: dados.categoriaId,
          cursoId: dados.cursoId,
          dataEmissao: dados.data || undefined,
          arquivo: dados.arquivo || null,
        },
        token
      );

      if (resultado._id || resultado.id) {
        Alert.alert('Sucesso!', 'Certificado enviado para análise.', [
          { text: 'OK', onPress: () => navigation.navigate('Dashboard') },
        ]);
      } else {
        Alert.alert('Erro', resultado.erro || 'Não foi possível enviar o certificado.');
      }
    } catch {
      Alert.alert('Erro', 'Não foi possível conectar ao servidor.');
    } finally {
      setCarregando(false);
    }
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.contentWrapper}>
        <ScrollView style={styles.content}>
          <ReviewBanner />
          <ActivityCard dados={dados} />
        </ScrollView>
      </View>

      <SubmitButton onPress={handleEnviar} carregando={carregando} />
    </View>
  );
}
