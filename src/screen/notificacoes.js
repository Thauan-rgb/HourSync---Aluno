import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';

export default function NotificacoesScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Ionicons name="options" size={24} color="#fff" />
        </TouchableOpacity>

        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Notificações</Text>
          <Text style={styles.headerSubtitle}>Acompanhe suas notificações</Text>
        </View>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('Notificacoes')}
        >
          <Ionicons name="notifications-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>

        <View style={styles.card}>
          <View style={styles.iconContainerSuccess}>
            <Ionicons name="checkmark-sharp" size={24} color="#00A896" />
          </View>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Certificado enviado com sucesso</Text>
            <Text style={styles.cardDescription}>Seu certificado foi enviado com sucesso para análise.</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.iconContainerDanger}>
            <Ionicons name="close-sharp" size={24} color="#E63946" />
          </View>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Certificado rejeitado!</Text>
            <Text style={styles.cardDescription}>Seu certificado foi rejeitado, clique e saiba o porquê.</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.iconContainerCyan}>
            <Text style={styles.textIcon}>+5</Text>
          </View>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Suas horas foram aprovadas com sucesso</Text>
            <Text style={styles.cardDescription}>Parabéns! Você recebeu mais 5 horas complementares.</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.iconContainerCyanLight}>
            <Ionicons name="trophy" size={24} color="#4eb5e5" />
          </View>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Parabéns!</Text>
            <Text style={styles.cardDescription}>Você atingiu a marca de 50h registradas.</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.iconContainerBlue}>
            <Ionicons name="document-text" size={24} color="#4A90E2" />
          </View>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Nova categoria disponível</Text>
            <Text style={styles.cardDescription}>Uma nova categoria foi adicionada a seu curso de ADS.</Text>
          </View>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  content: { alignItems: 'center', paddingTop: 20, paddingBottom: 40 },
  header: {
    backgroundColor: '#56C3DC',
    paddingTop: 60, paddingBottom: 40, paddingHorizontal: 20,
    flexDirection: 'row', alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 20, borderBottomRightRadius: 20,
  },
  menuButton: {
    width: 44, height: 44, borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.3)',
    alignItems: 'center', justifyContent: 'center',
  },
  headerTextContainer: { flex: 1, alignItems: 'center', marginTop: 8 },
  headerTitle: { color: '#fff', fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  headerSubtitle: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
  card: {
    backgroundColor: '#fff', flexDirection: 'row', padding: 16,
    borderRadius: 15, alignItems: 'center', width: '92%',
    borderWidth: 1, borderColor: '#EAEAEA', marginBottom: 12,
  },
  cardTextContainer: { flex: 1, marginLeft: 20 },
  cardTitle: { fontWeight: 'bold', fontSize: 13, color: '#333', marginBottom: 3 },
  cardDescription: { fontSize: 12, color: '#888' },
  iconContainerSuccess: {
    width: 44, height: 44, borderRadius: 4,
    backgroundColor: 'rgba(0, 16, 150, 0.1)',
    justifyContent: 'center', alignItems: 'center',
  },
  iconContainerDanger: {
    width: 44, height: 44, borderRadius: 4,
    backgroundColor: 'rgba(230, 57, 70, 0.1)',
    justifyContent: 'center', alignItems: 'center',
  },
  iconContainerCyan: {
    width: 44, height: 44, borderRadius: 4,
    backgroundColor: 'rgba(91, 210, 225, 0.7)',
    justifyContent: 'center', alignItems: 'center',
  },
  iconContainerCyanLight: {
    width: 44, height: 44, borderRadius: 4,
    backgroundColor: 'rgba(78, 181, 229, 0.1)',
    justifyContent: 'center', alignItems: 'center',
  },
  iconContainerBlue: {
    width: 44, height: 44, borderRadius: 4,
    backgroundColor: 'rgba(74, 144, 226, 0.1)',
    justifyContent: 'center', alignItems: 'center',
  },
  textIcon: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
