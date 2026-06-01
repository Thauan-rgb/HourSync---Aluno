import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  cardsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 20 },
  card: { width: '47.5%', borderRadius: 12, padding: 14, gap: 4 },
  cardBlue:  { backgroundColor: '#E6F1FB' },
  cardAmber: { backgroundColor: '#FAEEDA' },
  cardTeal:  { backgroundColor: '#E1F5EE' },
  cardRed:   { backgroundColor: '#FCEBEB' },
  cardLabel: { fontSize: 12, fontWeight: '500' },
  cardValue: { fontSize: 22, fontWeight: '700' },
});
