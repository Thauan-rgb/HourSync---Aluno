import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import HeaderEsqueceuSenha from '../components/HeaderEsqueceuSenha';
import EmailField from '../components/EmailField';
import InfoCard from '../components/InfoCard';

export default function EsqueceuSenha({ navigation }) {
  return (
    <ScrollView style={styles.wrapper} contentContainerStyle={styles.container}>

      <HeaderEsqueceuSenha />

      <View style={styles.content}>

        <EmailField />

        <InfoCard text="Você receberá um link para redefinir sua senha. Verifique também sua caixa de spam." />

        <TouchableOpacity style={styles.button}>
          <Ionicons name="send-outline" size={18} color="#fff" />
          <Text style={styles.buttonText}>Enviar link de recuperação</Text>
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
