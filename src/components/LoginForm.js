import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { login } from '../api';
import styles from '../styles/LoginForm.styles';

export default function LoginForm() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function handleLogin() {
    const data = await login(email, senha);

    if (data.token) {
      navigation.navigate('EnvioHoras1');
    } else {
      Alert.alert('Erro', data.erro || 'Credenciais inválidas.');
    }
  }

  return (
    <>
      <Text style={styles.title}>Bem Vindo!</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#B1B1B1"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#B1B1B1"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </>
  );
}
