import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function SubmitButton({ onPress, carregando }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} disabled={carregando}>
      <Text style={styles.buttonText}>
        {carregando ? 'Enviando...' : 'Enviar para análise'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6987FF',
    margin: 16,
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
