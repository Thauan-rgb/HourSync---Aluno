import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function SubmitButton({ onPress, carregando }) {
  return (

    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={carregando}
    >
      {/* Controla o estado de carregamento e altera o texto do botão */}
      <Text style={styles.buttonText}>
        {carregando ? 'Enviando...' : 'Enviar para análise'}
      </Text>
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
