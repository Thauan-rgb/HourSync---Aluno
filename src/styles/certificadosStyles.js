import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Fundo geral da tela agora é azul para dar continuidade ao Header
  container: {
    flex: 1,
    backgroundColor: '#56c3dc', 
  },
  
  // A área branca que vai sobrepor o Header
  body: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: -20, // Puxa o fundo branco para cima do header
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
});

export default styles;