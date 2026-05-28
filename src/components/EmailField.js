import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/EmailField.styles';

export default function EmailField() {
  return (
    <>
      <Text style={styles.fieldLabel}>Email institucional</Text>

      <View style={styles.inputWrapper}>
        <Ionicons name="mail-outline" size={20} color="#54C1DD" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="aluno@edu.pe.senac.br"
          placeholderTextColor="#B1B1B1"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <Text style={styles.helperText}>
        Digite seu email cadastrado na plataforma
      </Text>
    </>
  );
}
