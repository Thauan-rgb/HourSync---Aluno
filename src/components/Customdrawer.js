import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../contexto/AuthContext';

const menuItems = [
  { label: 'Dashboard',      icon: 'home-outline',          screen: 'Dashboard'    },
  { label: 'Envio de Horas', icon: 'cloud-upload-outline',  screen: 'EnvioHoras1'  },
  { label: 'Notificações',   icon: 'notifications-outline', screen: 'Notificacoes' },
  { label: 'Certificados',   icon: 'ribbon-outline',        screen: 'Certificados' },
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
              <Ionicons name={item.icon} size={22} color="#fff" />
              <Text style={[styles.menuLabel, isActive && styles.menuLabelActive]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </DrawerContentScrollView>

      <TouchableOpacity style={styles.logoutButton} onPress={handleSair}>
        <Ionicons name="log-out-outline" size={22} color="#fff" />
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4eb5e5',
  },
  header: {
    backgroundColor: 'rgba(0,0,0,0.15)',
    paddingTop: 60,
    paddingBottom: 24,
    paddingHorizontal: 20,
    alignItems: 'center',
    gap: 4,
  },
  avatarCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: 'rgba(255,255,255,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  userName: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '500',
  },
  userEmail: {
    color: 'rgba(255,255,255,0.75)',
    fontSize: 12,
  },
  scrollArea: {
    paddingTop: 16,
    paddingHorizontal: 12,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingVertical: 13,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 4,
  },
  menuItemActive: {
    backgroundColor: 'rgba(255,255,255,0.25)',
  },
  menuLabel: {
    fontSize: 15,
    fontWeight: '500',
    color: 'rgba(255,255,255,0.85)',
  },
  menuLabelActive: {
    color: '#fff',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.2)',
  },
  logoutText: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 15,
    fontWeight: '500',
  },
});
