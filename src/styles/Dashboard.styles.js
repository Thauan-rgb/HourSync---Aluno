import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Layout geral
  root: { flex: 1, backgroundColor: '#fff' },
  wrapper: { flex: 1 },
  container: { flexGrow: 1 },
  loading: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  content: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    marginTop: -28,
    padding: 20,
    paddingTop: 24,
  },

  // Header
  header: {
    backgroundColor: '#54C1DD',
    paddingTop: 52,
    paddingBottom: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 16,
  },
  navTitle: { fontSize: 17, fontWeight: '600', color: '#fff' },

  // Tabs de cursos
  tabsScroll: { flexGrow: 0, marginBottom: 20 },
  tabsContent: { gap: 8, paddingHorizontal: 4 },
  tab: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
    backgroundColor: 'rgba(255,255,255,0.15)',
    maxWidth: 180,
  },
  tabActive: {
    backgroundColor: '#fff',
  },
  tabText: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.85)',
    fontWeight: '500',
  },
  tabTextActive: {
    color: '#54C1DD',
    fontWeight: '700',
  },

  // Anel de progresso
  ringWrap: { alignItems: 'center', justifyContent: 'center' },
  ringCenter: { position: 'absolute', alignItems: 'center' },
  ringValue: { fontSize: 32, fontWeight: '700', color: '#fff' },
  ringTotal: { fontSize: 13, color: 'rgba(255,255,255,0.75)', marginTop: 2 },

  // Cards de estatísticas
  cardsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 20 },
  card: { width: '47.5%', borderRadius: 12, padding: 14, gap: 4 },
  cardBlue:  { backgroundColor: '#E6F1FB' },
  cardAmber: { backgroundColor: '#FAEEDA' },
  cardTeal:  { backgroundColor: '#E1F5EE' },
  cardRed:   { backgroundColor: '#FCEBEB' },
  cardLabel: { fontSize: 12, fontWeight: '500' },
  cardValue: { fontSize: 22, fontWeight: '700' },

  // Lista de atividades
  sectionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
    marginTop: 8,
  },
  empty: { fontSize: 13, color: '#999', textAlign: 'center', marginTop: 20 },
  activityRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, gap: 12 },
  activityBorder: { borderBottomWidth: 0.5, borderBottomColor: '#EBEBEB' },
  actIcon: { width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  actBody: { flex: 1 },
  actName: { fontSize: 13, fontWeight: '500', color: '#222' },
  actMeta: { fontSize: 11, color: '#888', marginTop: 2 },
  badge: { borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4 },
  badgeText: { fontSize: 11, fontWeight: '500' },
});
