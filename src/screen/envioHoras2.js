import { View, ScrollView, Modal, Text, TouchableOpacity, StyleSheet } from 'react-native';
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

  // Estado de carregamento do envio
  const [carregando, setCarregando] = useState(false);

  // Controla a exibição do modal de sucesso
  const [modalSucesso, setModalSucesso] = useState(false);

  // Envia os dados do certificado para a API
  async function handleEnviar() {
    if (!dados.cursoId || !dados.categoriaId) {
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

      // Exibe o modal caso o envio seja concluído
      if (resultado._id || resultado.id) {
        setModalSucesso(true);
      }
    } catch {
      // erro silencioso
    } finally {
      setCarregando(false);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>

        {/* Cabeçalho da tela */}
        <Header />

        {/* Área principal do conteúdo */}
        <View style={styles.contentWrapper}>
          <ScrollView style={styles.content}>

            {/* Banner de revisão */}
            <ReviewBanner />

            {/* Card com os dados da atividade */}
            <ActivityCard dados={dados} />

          </ScrollView>
        </View>

        {/* Botão de envio */}
        <SubmitButton
          onPress={handleEnviar}
          carregando={carregando}
        />

      </View>

      {/* Modal de Sucesso */}
      <Modal visible={modalSucesso} transparent animationType="fade">
        <View style={modalStyles.overlay}>
          <View style={modalStyles.caixa}>

            {/* Título do modal */}
            <Text style={modalStyles.titulo}>Enviado!</Text>

            {/* Mensagem de confirmação */}
            <Text style={modalStyles.subtitulo}>
              Certificado enviado para análise com sucesso.
            </Text>

            {/* Botão para retornar ao Dashboard */}
            <TouchableOpacity
              style={modalStyles.botao}
              onPress={() => {
                setModalSucesso(false);

                navigation.reset({
                  index: 0,
                  routes: [{ name: 'Main', params: { screen: 'Dashboard' } }],
                });
              }}
            >
              <Text style={modalStyles.botaoTexto}>OK</Text>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>
    </View>
  );
}

const modalStyles = StyleSheet.create({

  // Fundo escuro por trás do modal
  overlay: {
    flex: 1,
    backgroundColor: '#00000088',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Caixa branca do modal
  caixa: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    width: '80%',
    alignItems: 'center',
    gap: 12,
  },

  // Título do modal
  titulo: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#2E7D32',
  },

  // Subtítulo do modal
  subtitulo: {
    fontSize: 13,
    color: '#888',
    textAlign: 'center',
  },

  // Botão OK
  botao: {
    backgroundColor: '#208AEF',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 24,
    marginTop: 8,
  },

  // Texto do botão
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },

});
