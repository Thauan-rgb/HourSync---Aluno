import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView,} from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.wrapper} contentContainerStyle={styles.container}>

      <View style={styles.quadrado}>
        <Image
          source={require('./assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.content}>

        <Text style={styles.titulo}>Bem Vindo!</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#B1B1B1"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#B1B1B1"
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.row}>
          <TouchableOpacity style={styles.secaoSalvar}>
            <View style={styles.circulo} />
            <Text style={styles.lembrar}>Lembre-se</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.esqueceuSenha}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.contatoSecao}>
          <View style={styles.contatoTituloRow}>
            <View style={styles.linha} />
            <Text style={styles.contatoTitulo}>Contato</Text>
            <View style={styles.linha} />
          </View>

          <View style={styles.iconsRow}>
            <TouchableOpacity>
              <Image source={require('./assets/email.png')} style={styles.icon} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./assets/whatsapp.png')} style={styles.icon} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./assets/github.png')} style={styles.icon} resizeMode="contain" />
            </TouchableOpacity>
          </View>

          <Text style={styles.footer}>Todos os direitos reservados</Text>
        </View>

      </View>

      <StatusBar style="auto" />
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

  quadrado: {
    width: '100%',
    height: 220,
    backgroundColor: '#54C1DD',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 480,
    height: 430,
  },

  content: {
  backgroundColor: '#fff',
  marginTop: -30,
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  padding: 20,
  paddingTop: 40,
  alignItems: 'center',
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'semi-bold',
    marginBottom: 30,
    alignSelf: 'center',
  },

  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },

  input: {
    backgroundColor: '#F7F7F7',
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    padding: 12,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#54C1DD',
    padding: 15,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 15,
  },

  secaoSalvar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  circulo: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#322AB8',
  },

  lembrar: {
    fontSize: 14,
    color: '#555',
  },

  esqueceuSenha: {
    fontSize: 14,
    color: '#555',
  },

  contatoSecao: {
    width: '100%',
    alignItems: 'center',
    marginTop: 40,
  },

  contatoTituloRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },

  linha: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },

  contatoTitulo: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#000',
  },

  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 40,
    marginBottom: 30,
  },

  icon: {
    width: 40,
    height: 40,
  },

  footer: {
    fontSize: 13,
    color: '#aaa',
    marginTop: 40,
  },
});
