import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  infoCard: {
    flexDirection: 'row',
    backgroundColor: 'rgba(84,193,221,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(84,193,221,0.25)',
    borderRadius: 14,
    padding: 14,
    gap: 10,
    marginBottom: 28,
    alignItems: 'flex-start',
  },

  infoText: {
    flex: 1,
    fontSize: 12,
    color: '#5a7a85',
    lineHeight: 18,
    fontWeight: '600',
  },
});
