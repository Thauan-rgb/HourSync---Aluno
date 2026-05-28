import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/RememberRow.styles';

export default function RememberRow() {
  const navigation = useNavigation();

  return (
    <View style={styles.row}>
      <TouchableOpacity style={styles.secaoSalvar}>
        <View style={styles.circulo} />
        <Text style={styles.lembrar}>Lembre-se</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('EsqueceuSenha')}>
        <Text style={styles.esqueceuSenha}>Esqueceu a senha?</Text>
      </TouchableOpacity>
    </View>
  );
}
