import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function SubmitButton() {
  return (

    // BOTÃO DE BAIXO DE ENVIAR
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Enviar para análise</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  // BOTÃO DE ENVIO
  button: {
    backgroundColor: '#6987FF',
    margin: 16,
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
  },

  // Texto do botão
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

});