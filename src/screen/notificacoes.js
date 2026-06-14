import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { useNotificacoes } from '../contexto/NotificacoesContext';

const TIPO_CONFIG = {
  certificado_enviado: {
    icon: 'cloud-upload-outline',
    cor: '#00A896',
    bg: 'rgba(0, 168, 150, 0.1)',
  },
};

const CONFIG_PADRAO = {
  icon: 'notifications-outline',
  cor: '#4A90E2',
  bg: 'rgba(74, 144, 226, 0.1)',
};

export default function NotificacoesScreen({ navigation }) {
  const { notificacoes } = useNotificacoes();

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Ionicons name="menu-outline" size={24} color="#fff" />
        </TouchableOpacity>

        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Notificações</Text>
          <Text style={styles.headerSubtitle}>Acompanhe suas notificações</Text>
        </View>

        <View style={styles.menuButton} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>

        {notificacoes.length === 0 ? (
          <View style={styles.vazio}>
            <Ionicons name="notifications-off-outline" size={48} color="#ccc" />
            <Text style={styles.vazioTexto}>Nenhuma notificação ainda.</Text>
          </View>
        ) : (
          notificacoes.map((n) => {
            const config = TIPO_CONFIG[n.tipo] || CONFIG_PADRAO;
            return (
              <View key={n.id} style={styles.card}>
                <View style={[styles.iconContainer, { backgroundColor: config.bg }]}>
                  <Ionicons name={config.icon} size={24} color={config.cor} />
                </View>
                <View style={styles.cardTextContainer}>
                  <Text style={styles.cardTitle}>{n.titulo}</Text>
                  <Text style={styles.cardDescription}>{n.descricao}</Text>
                  <Text style={styles.cardData}>{n.data}</Text>
                </View>
              </View>
            );
          })
        )}

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
  cardTextContainer: { flex: 1, marginLeft: 14 },
  cardTitle: { fontWeight: 'bold', fontSize: 13, color: '#333', marginBottom: 3 },
  cardDescription: { fontSize: 12, color: '#888', lineHeight: 17 },
  cardData: { fontSize: 11, color: '#bbb', marginTop: 4 },
  iconContainer: {
    width: 44, height: 44, borderRadius: 8,
    justifyContent: 'center', alignItems: 'center',
    flexShrink: 0,
  },
  vazio: {
    flex: 1, alignItems: 'center', justifyContent: 'center',
    paddingTop: 80, gap: 12,
  },
  vazioTexto: { color: '#aaa', fontSize: 14 },
});
