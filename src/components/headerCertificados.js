import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View>
        {/* Header */}
      <View style={styles.header}>
            {/* Botão Menu */}
            <TouchableOpacity style={styles.menuButton}>
                <Ionicons name="menu" size={20} color="#fff" />
            </TouchableOpacity>
        {/* TÍTULOS CONTAINER */}
        <View style={styles.titleContainer}>
            <Text style={styles.headerTitle}>Meus Certificados</Text>
            <Text style={styles.subHeaderTitle}>Acompanhe seus certificados aprovados e registrados na plataforma</Text>
        </View>
            {/* Botão Notificação */}
            <TouchableOpacity style={styles.menuButton}>
                <Ionicons name="notifications-outline" size={20} color="#fff"/>
            </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    // HEADER
  header: {
    backgroundColor: '#56c3dc',
    padding: 30,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingBottom: 47,
  },
//   CONTAINER TÍTULOS
   titleContainer: {
    flex: 1,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
   },
   // Título centralizado no header
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subHeaderTitle: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 25,
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
});




























// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// export default function HeaderCertificados() {
//   return (
//     // Header
//     <View style={styles.header}>
//       {/* Texto título */}
//       <Text style={styles.titulo}>Meus Certificados</Text>
//       {/* Texto subtítulo */}
//       <Text style={styles.subtitulo}>Acompanhe seus certificados aprovados e registrados na plataforma</Text>
//       {/* Botão Menu */}
//       <TouchableOpacity style={styles.menuButton}>
//         <Ionicons name="menu" size={20} color="#fff"/>
//       </TouchableOpacity>
//       {/* Botão Notificação */}
//       <TouchableOpacity style={styles.menuButton}>
//         <Ionicons name="notifications-outline" size={20} color="#fff"/>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   header: {
//     padding: 30,
//     backgroundColor: '#56c3dc',
//     alignItems: 'center',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingBottom: 16,
//   },
//   titulo: {
//     color: '#ffff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//     menuButton: {
//     width: 36,
//     height: 36,
//     borderRadius: 999,
//     backgroundColor: 'rgba(255,255,255,0.2)',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   subtitulo: {
//     color: '#fff',
//     fontSize: 13,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//     stepper: {
//     backgroundColor: '#56C3DC',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingBottom: 40,
//     paddingTop: 16,
//     gap: 8,
//     marginTop: -1,
//   },

// });