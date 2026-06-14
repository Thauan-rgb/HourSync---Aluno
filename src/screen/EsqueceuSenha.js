import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

import HeaderEsqueceuSenha from '../components/HeaderEsqueceuSenha';
import EmailField from '../components/EmailField';
import InfoCard from '../components/InfoCard';
import { recuperarSenha } from '../api/auth';

export default function EsqueceuSenha({ navigation }) {
  const [email, setEmail] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function handleEnviar() {
    if (!email) {
      Alert.alert('Atenção', 'Digite seu email institucional.');
      return;
    }
    setCarregando(true);
    try {
      await recuperarSenha(email);
      Alert.alert('Email enviado', 'Verifique sua caixa de entrada (e spam) para redefinir sua senha.', [
        { text: 'OK', onPress: () => navigation?.goBack() },
      ]);
    } catch {
      Alert.alert('Erro', 'Não foi possível enviar o link. Tente novamente.');
    } finally {
      setCarregando(false);
    }
  }

  return (
    <ScrollView style={styles.wrapper} contentContainerStyle={styles.container}>

      <HeaderEsqueceuSenha />

      <View style={styles.content}>

        <EmailField value={email} onChangeText={setEmail} />

        <InfoCard text="Você receberá um link para redefinir sua senha. Verifique também sua caixa de spam." />

        <TouchableOpacity style={styles.button} onPress={handleEnviar} disabled={carregando}>
          <Ionicons name="send-outline" size={18} color="#fff" />
          <Text style={styles.buttonText}>{carregando ? 'Enviando...' : 'Enviar link de recuperação'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backLink}
          onPress={() => navigation?.goBack()}
        >
          <Ionicons name="chevron-back-outline" size={16} color="#54C1DD" />
          <Text style={styles.backLinkText}>Voltar para o login</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>Todos os direitos reservados</Text>
      </View>

      <StatusBar style="light" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },

  container: {
    flexGrow: 1,
  },

  content: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: -28,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 28,
    paddingTop: 36,
    paddingBottom: 40,
  },

  button: {
    backgroundColor: '#54C1DD',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 16,
    borderRadius: 18,
    shadowColor: '#54C1DD',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 8,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.3,
  },

  backLink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    marginTop: 20,
  },

  backLinkText: {
    fontSize: 13.5,
    fontWeight: '700',
    color: '#54C1DD',
  },

  footer: {
    fontSize: 11,
    color: '#ccc',
    textAlign: 'center',
    marginTop: 40,
    fontWeight: '600',
  },
});
