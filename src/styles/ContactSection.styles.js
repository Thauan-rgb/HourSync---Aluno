import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
