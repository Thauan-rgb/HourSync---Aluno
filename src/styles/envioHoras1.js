import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  // Container principal da tela (QUADRO BRANCO)
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },

  // Deixar o meio branco com a borda de cima redonda
  contentWrapper: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -16,
    overflow: 'hidden',
  },

  // Área de conteúdo rolável
  content: {
    flex: 1,
    padding: 16,
  },

});

export default styles;
