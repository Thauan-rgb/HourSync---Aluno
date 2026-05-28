import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Botao({ titulo, onPress }) {
  return (
    <TouchableOpacity style={styles.botaoContainer} onPress={onPress}>
      <Text style={styles.botao}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botaoContainer: {
    marginHorizontal: 12,
    marginBottom: 16,
    backgroundColor: '#6C8EF5',
    borderRadius: 30,
    padding: 16,
    alignItems: 'center',
  },
  botao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});