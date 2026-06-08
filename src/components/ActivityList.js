import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const STATUS_CONFIG = {
  Aprovado:  { bg: '#E8F5E9', color: '#2E7D32', icon: 'checkmark-circle' },
  Pendente:  { bg: '#FFF8E1', color: '#F57F17', icon: 'time'             },
  Rejeitado: { bg: '#FFEBEE', color: '#C62828', icon: 'close-circle'     },
};

export default function ActivityList({ atividades }) {
  if (!atividades || atividades.length === 0) {
    return (
      <Text style={styles.empty}>Nenhuma atividade enviada ainda.</Text>
    );
  }

  return (
    <View>
      <Text style={styles.sectionTitle}>Atividades recentes</Text>
      {atividades.map((item, index) => {
        const config = STATUS_CONFIG[item.status] || STATUS_CONFIG.Pendente;
        const isLast = index === atividades.length - 1;
        return (
          <View
            key={item.id}
            style={[styles.activityRow, !isLast && styles.activityBorder]}
          >
            <View style={[styles.actIcon, { backgroundColor: config.bg }]}>
              <Ionicons name={config.icon} size={18} color={config.color} />
            </View>
            <View style={styles.actBody}>
              <Text style={styles.actName} numberOfLines={1}>{item.nome}</Text>
              <Text style={styles.actMeta}>{item.cat}</Text>
            </View>
            <View style={[styles.badge, { backgroundColor: config.bg }]}>
              <Text style={[styles.badgeText, { color: config.color }]}>
                {item.horas}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
    marginTop: 8,
  },
  empty: {
    fontSize: 13,
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
  },
  activityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 12,
  },
  activityBorder: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#EBEBEB',
  },
  actIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actBody: { flex: 1 },
  actName: { fontSize: 13, fontWeight: '500', color: '#222' },
  actMeta: { fontSize: 11, color: '#888', marginTop: 2 },
  badge: {
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  badgeText: { fontSize: 11, fontWeight: '500' },
});
