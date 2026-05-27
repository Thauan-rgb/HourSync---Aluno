import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
});
