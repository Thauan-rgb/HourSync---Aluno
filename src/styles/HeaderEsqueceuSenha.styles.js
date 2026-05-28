import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    backgroundColor: '#54C1DD',
    paddingTop: 64,
    paddingBottom: 56,
    paddingHorizontal: 24,
    alignItems: 'center',
  },

  headerIconWrapper: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#fff',
    letterSpacing: 0.3,
  },

  headerSubtitle: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.85)',
    marginTop: 6,
    fontWeight: '500',
    textAlign: 'center',
  },
});
