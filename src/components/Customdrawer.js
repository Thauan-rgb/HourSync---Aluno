import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../contexto/AuthContext';

const menuItems = [
  { label: 'Envio de Horas',  icon: 'cloud-upload-outline',  screen: 'EnvioHoras1'  },
  { label: 'Revisão',         icon: 'document-text-outline', screen: 'EnvioHoras2'  },
  { label: 'Notificações',    icon: 'notifications-outline', screen: 'Notificacoes' },
  { label: 'Certificados',    icon: 'ribbon-outline',        screen: 'Certificados' },
];

export default function CustomDrawer(props) {
  const { navigation, state } = props;
  const { usuario, setAuth } = useAuth();
  const currentRoute = state?.routeNames?.[state?.index];

  function handleSair() {
    setAuth({ token: null, usuario: null });
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarCircle}>
          <Ionicons name="person" size={36} color="#fff" />
        </View>
        <Text style={styles.userName}>Olá, {usuario?.nome || 'Aluno'}!</Text>
        <Text style={styles.userEmail}>{usuario?.email || ''}</Text>
      </View>

      <DrawerContentScrollView {...props} contentContainerStyle={styles.scrollArea}>
        {menuItems.map((item) => {
          const isActive = currentRoute === item.screen;
          return (
            <TouchableOpacity
              key={item.label}
              style={[styles.menuItem, isActive && styles.menuItemActive]}
              onPress={() => navigation.navigate(item.screen)}
            >
              <Ionicons name={item.icon} size={22} color={isActive ? '#56C3DC' : '#555'} />
              <Text style={[styles.menuLabel, isActive && styles.menuLabelActive]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </DrawerContentScrollView>

      <TouchableOpacity style={styles.logoutButton} onPress={handleSair}>
        <Ionicons name="log-out-outline" size={22} color="#E53935" />
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    backgroundColor: '#56C3DC', paddingTop: 60, paddingBottom: 30,
    paddingHorizontal: 20, alignItems: 'center',
  },
  avatarCircle: {
    width: 72, height: 72, borderRadius: 36,
    backgroundColor: 'rgba(255,255,255,0.3)',
    alignItems: 'center', justifyContent: 'center', marginBottom: 12,
  },
  userName: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  userEmail: { color: 'rgba(255,255,255,0.8)', fontSize: 12, marginTop: 4 },
  scrollArea: { paddingTop: 16, paddingHorizontal: 12 },
  menuItem: {
    flexDirection: 'row', alignItems: 'center', gap: 14,
    paddingVertical: 14, paddingHorizontal: 12, borderRadius: 12, marginBottom: 4,
  },
  menuItemActive: { backgroundColor: '#EAF7FB' },
  menuLabel: { fontSize: 15, color: '#555', fontWeight: '500' },
  menuLabelActive: { color: '#56C3DC', fontWeight: '700' },
  logoutButton: {
    flexDirection: 'row', alignItems: 'center', gap: 12,
    padding: 20, borderTopWidth: 1, borderTopColor: '#f0f0f0',
  },
  logoutText: { color: '#E53935', fontSize: 15, fontWeight: '600' },
});
