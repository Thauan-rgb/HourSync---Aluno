import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/InfoCard.styles';

export default function InfoCard({ text }) {
  return (
    <View style={styles.infoCard}>
      <Ionicons name="information-circle-outline" size={20} color="#54C1DD" />
      <Text style={styles.infoText}>{text}</Text>
    </View>
  );
}
