import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { login } from '../api/auth';
import { useAuth } from '../contexto/AuthContext';
import styles from '../styles/LoginForm.styles';

export default function LoginForm() {
  const navigation = useNavigation();
  const { setAuth } = useAuth();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function handleLogin() {
    if (!email || !senha) {
      Alert.alert('Atenção', 'Preencha email e senha.');
      return;
    }
    setCarregando(true);
    try {
      const data = await login(email, senha);
      if (data.token) {
        setAuth({ token: data.token, usuario: data.usuario });
        navigation.navigate('Main');
      } else {
        Alert.alert('Erro', data.erro || 'Credenciais inválidas.');
      }
    } catch {
      Alert.alert('Erro', 'Não foi possível conectar ao servidor.');
    } finally {
      setCarregando(false);
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

      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={carregando}>
        <Text style={styles.buttonText}>{carregando ? 'Entrando...' : 'Entrar'}</Text>
      </TouchableOpacity>
    </>
  );
}
