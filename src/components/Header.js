import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View>

      {/* HEADER */}
      <View style={styles.header}>

        {/* Botão do menu (ícone de hambúrguer) */}
        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="menu" size={20} color="#fff" />
        </TouchableOpacity> 
      
      {/*Titulo do header */}
        <Text style={styles.headerTitle}>Envio de Horas</Text>

      {/* Botão de notificações*/}
        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="notifications-outline" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

        {/* STEPPER (Bara de progresso)*/}
      <View style={styles.stepper}>
        <View style={styles.stepCircle}>
          <Text style={styles. stepText}>1</Text>
        </View>
        <View style={styles.stepLine} />
        <View style={styles.stepCircle}>
          <Text style={styles. stepText}>2</Text>
        </View>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
    // HEADER -- Cabeçalho azul com título e botões
  header: {
    backgroundColor: '#56C3DC',
    padding: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 16,
  },

   // Título centralizado no header
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  // Botão circular do header (menu e notificações)
  menuButton: {
    width: 36,
    height: 36,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },


   // STEPPER -- Barra de progresso com etapas
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

// Círculo de cada etapa
  stepCircle: {
    width: 30,
    height: 30,
    borderRadius: 999,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Número dentro do círculo
  stepText: {
    color: '#208AEF',
    fontWeight: 'bold',
  },

 // Linha do meio das bolas
  stepLine: {
    flex: 1,
    maxWidth: 80,
    height: 2,
    backgroundColor: '#fff',
  },
});