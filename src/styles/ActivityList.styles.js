import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  sectionTitle: { fontSize: 15, fontWeight: '600', color: '#222', marginBottom: 8 },
  activityRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, gap: 12 },
  activityBorder: { borderBottomWidth: 0.5, borderBottomColor: '#EBEBEB' },
  actIcon: { width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  actBody: { flex: 1 },
  actName: { fontSize: 13, fontWeight: '500', color: '#222' },
  actMeta: { fontSize: 11, color: '#888', marginTop: 2 },
  badge: { borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4 },
  badgeText: { fontSize: 11, fontWeight: '500' },
});
