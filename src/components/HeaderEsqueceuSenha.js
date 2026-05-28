import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/HeaderEsqueceuSenha.styles';

export default function HeaderEsqueceuSenha() {
  return (
    <View style={styles.header}>
      <View style={styles.headerIconWrapper}>
        <Ionicons name="lock-closed-outline" size={30} color="#fff" />
      </View>
      <Text style={styles.headerTitle}>Esqueceu a senha?</Text>
      <Text style={styles.headerSubtitle}>
        Confirme seu email para receber sua senha
      </Text>
    </View>
  );
}
