import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();

  return (
    <View>

      {/* HEADER */}
      <View style={styles.header}>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Ionicons name="menu" size={20} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Envio de Horas</Text>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('Notificacoes')}
        >
          <Ionicons name="notifications-outline" size={20} color="#fff" />
        </TouchableOpacity>

      </View>

      {/* STEPPER */}
      <View style={styles.stepper}>
        <View style={styles.stepCircle}>
          <Text style={styles.stepText}>1</Text>
        </View>
        <View style={styles.stepLine} />
        <View style={styles.stepCircle}>
          <Text style={styles.stepText}>2</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#56C3DC',
    padding: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 16,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuButton: {
    width: 36,
    height: 36,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepper: {
    backgroundColor: '#56C3DC',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 40,
    paddingTop: 16,
    gap: 8,
    marginTop: -1,
  },
  stepCircle: {
    width: 30,
    height: 30,
    borderRadius: 999,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepText: {
    color: '#208AEF',
    fontWeight: 'bold',
  },
  stepLine: {
    flex: 1,
    maxWidth: 80,
    height: 2,
    backgroundColor: '#fff',
  },
});
