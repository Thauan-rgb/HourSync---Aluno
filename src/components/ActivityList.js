import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/ActivityList.styles';

const STATUS_CFG = {
  Aprovado: { iconName: 'checkmark-circle', iconBg: '#E1F5EE', iconColor: '#0F6E56', badgeBg: '#E1F5EE', badgeText: '#0F6E56' },
  Pendente:  { iconName: 'time-outline',    iconBg: '#FAEEDA', iconColor: '#854F0B', badgeBg: '#FAEEDA', badgeText: '#854F0B' },
  Rejeitado: { iconName: 'close-circle',    iconBg: '#FCEBEB', iconColor: '#A32D2D', badgeBg: '#FCEBEB', badgeText: '#A32D2D' },
};

export default function ActivityList({ atividades }) {
  return (
    <>
      <Text style={styles.sectionTitle}>Atividades Recentes</Text>

      {atividades.map((item, index) => {
        const cfg = STATUS_CFG[item.status];
        return (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.activityRow,
              index < atividades.length - 1 && styles.activityBorder,
            ]}
          >
            <View style={[styles.actIcon, { backgroundColor: cfg.iconBg }]}>
              <Ionicons name={cfg.iconName} size={18} color={cfg.iconColor} />
            </View>
            <View style={styles.actBody}>
              <Text style={styles.actName} numberOfLines={1}>{item.nome}</Text>
              <Text style={styles.actMeta}>{item.horas} · {item.cat}</Text>
            </View>
            <View style={[styles.badge, { backgroundColor: cfg.badgeBg }]}>
              <Text style={[styles.badgeText, { color: cfg.badgeText }]}>{item.status}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </>
  );
}
