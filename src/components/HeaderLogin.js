import React from 'react';
import { View, Image } from 'react-native';
import styles from '../styles/HeaderLogin.styles';

export default function Header() {
  return (
    <View style={styles.quadrado}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}
