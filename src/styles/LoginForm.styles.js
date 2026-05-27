import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  title: {
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
});
