import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ReviewBanner() {
  return (
    <View style={styles.row}>

      <View style={styles.reviewIcon}>
        <Ionicons name="document-text-outline" size={24} color="#208AEF" />
      </View>

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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 12,
  },
  reviewIcon: {
    backgroundColor: '#E3F2FD',
    width: 44,
    height: 44,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  reviewBanner: {
    flex: 1,
    flexDirection: 'column',
    gap: 4,
  },
  reviewTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#222',
  },
  reviewSubtitle: {
    fontSize: 12,
    color: '#888',
    lineHeight: 17,
  },
});
