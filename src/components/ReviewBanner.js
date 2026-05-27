import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ReviewBanner() {
  return (

    // PARTE DE REVISÃO -- Aviso no topo
    <View style={styles.row}>

      {/* Ícone do banner de revisão */}
      <View style={styles.reviewIcon}>
        <Ionicons name="document-text-outline" size={60} color="#208AEF" />
      </View>

      {/* Textos do banner de revisão */}
      <View style={styles.reviewBanner}>
        <Text style={styles.reviewTitle}>
          Revise suas informações
        </Text>
        <Text style={styles.reviewSubtitle}>
          Confira os dados e o certificado antes de enviar.{'\n'}
          Você poderá editar se necessário.
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  // Container do banner (ícone + textos lado a lado)
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  // Ícone do banner de revisão
  reviewIcon: {
    backgroundColor: '#E3F2FD',
    width: 45,
    height: 45,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 50,
    marginTop: 20,
  },

  // Container dos textos
  reviewBanner: {
    flexDirection: 'center',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
    marginTop: 28,
    marginLeft: 18,
  },

  // Título do banner de revisão
  reviewTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#222',
     marginTop: 10,
     marginLeft: -70,


  },

  // Subtítulo do banner de revisão
  reviewSubtitle: {
    fontSize: 12,
    color: '#888',
    marginTop: -5,
    flexShrink: 1,
    justifyContent: 'center',
  },

});