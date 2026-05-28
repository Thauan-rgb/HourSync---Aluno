import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/ContactSection.styles';

export default function ContactSection() {
  return (
    <View style={styles.contatoSecao}>
      <View style={styles.contatoTituloRow}>
        <View style={styles.linha} />
        <Text style={styles.contatoTitulo}>Contato</Text>
        <View style={styles.linha} />
      </View>

      <View style={styles.iconsRow}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/email.png')}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/whatsapp.png')}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/github.png')}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>Todos os direitos reservados</Text>
    </View>
  );
}
