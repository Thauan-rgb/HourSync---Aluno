import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  // Container principal da tela
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },

  // Área branca com borda de cima redonda
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
