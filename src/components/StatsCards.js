import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/StatsCards.styles';

export default function StatsCards({ curso }) {
  return (
    <View style={styles.cardsGrid}>
      <View style={[styles.card, styles.cardBlue]}>
        <Text style={[styles.cardLabel, { color: '#185FA5' }]}>Horas totais</Text>
        <Text style={[styles.cardValue, { color: '#0C447C' }]}>{curso.aprovadas}h</Text>
      </View>
      <View style={[styles.card, styles.cardAmber]}>
        <Text style={[styles.cardLabel, { color: '#854F0B' }]}>Pendentes</Text>
        <Text style={[styles.cardValue, { color: '#633806' }]}>{curso.pendentes}h</Text>
      </View>
      <View style={[styles.card, styles.cardTeal]}>
        <Text style={[styles.cardLabel, { color: '#0F6E56' }]}>Horas restantes</Text>
        <Text style={[styles.cardValue, { color: '#085041' }]}>{curso.meta - curso.aprovadas}h</Text>
      </View>
      <View style={[styles.card, styles.cardRed]}>
        <Text style={[styles.cardLabel, { color: '#A32D2D' }]}>Rejeitados</Text>
        <Text style={[styles.cardValue, { color: '#791F1F' }]}>{curso.rejeitadas}h</Text>
      </View>
    </View>
  );
}
