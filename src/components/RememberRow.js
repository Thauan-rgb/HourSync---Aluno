import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/RememberRow.styles';

export default function RememberRow() {
  return (
    <View style={styles.row}>
      <TouchableOpacity style={styles.secaoSalvar}>
        <View style={styles.circulo} />
        <Text style={styles.lembrar}>Lembre-se</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.esqueceuSenha}>Esqueceu a senha?</Text>
      </TouchableOpacity>
    </View>
  );
}
