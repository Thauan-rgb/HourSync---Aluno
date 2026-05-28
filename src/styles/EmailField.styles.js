import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  fieldLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#444',
    marginBottom: 8,
    letterSpacing: 0.3,
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F9FA',
    borderWidth: 1.5,
    borderColor: '#e2e8ec',
    borderRadius: 16,
    paddingHorizontal: 14,
    marginBottom: 6,
  },

  inputIcon: {
    marginRight: 10,
  },

  input: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 14,
    color: '#333',
  },

  helperText: {
    fontSize: 11.5,
    color: '#999',
    marginBottom: 24,
    paddingLeft: 4,
    fontWeight: '500',
  },
});
