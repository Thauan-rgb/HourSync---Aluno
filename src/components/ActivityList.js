import { View, Text, StyleSheet } from 'react-native';

export default function ActivityCard({ dados }) {
  const arquivo = dados?.arquivo;
  const nomeArquivo = arquivo?.fileName || arquivo?.uri?.split('/').pop() || 'certificado';

  return (
    <View style={styles.card}>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Dados da atividade</Text>
      </View>

      <View style={styles.dataRow}>
        <Text style={styles.dataLabel}>Curso</Text>
        <Text style={styles.dataValue}>{dados?.cursoNome || '—'}</Text>
      </View>

      <View style={styles.dataRow}>
        <Text style={styles.dataLabel}>Categoria</Text>
        <Text style={styles.dataValue}>{dados?.categoriaNome || '—'}</Text>
      </View>

      <View style={styles.dataRow}>
        <Text style={styles.dataLabel}>Horas</Text>
        <Text style={styles.dataValue}>{dados?.horas ? `${dados.horas}h` : '—'}</Text>
      </View>

      <View style={styles.dataRow}>
        <Text style={styles.dataLabel}>Data de Submissão</Text>
        <Text style={styles.dataValue}>{dados?.data || '—'}</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Certificado</Text>
      </View>

      {arquivo ? (
        <View style={styles.pdfRow}>
          <View style={styles.pdfIcon}>
            <Text style={styles.pdfIconText}>ARQ</Text>
          </View>
          <View style={styles.pdfInfo}>
            <Text style={styles.pdfName}>{nomeArquivo}</Text>
            <Text style={styles.pdfMeta}>Selecionado</Text>
          </View>
        </View>
      ) : (
        <Text style={{ color: '#999', fontSize: 13 }}>Nenhum arquivo anexado</Text>
      )}

      <View style={styles.readyBanner}>
        <Text style={styles.readyText}>Pronto para envio</Text>
        <Text style={styles.readySubtext}>
          Ao enviar, suas informações serão encaminhadas para análise da coordenação.
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', borderRadius: 16, padding: 16, gap: 12 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  sectionTitle: { fontWeight: 'bold', fontSize: 15, color: '#222' },
  dataRow: {
    flexDirection: 'row', justifyContent: 'space-between',
    borderBottomWidth: 1, borderBottomColor: '#F0F0F0', paddingBottom: 20,
  },
  dataLabel: { color: '#888', fontSize: 13 },
  dataValue: { color: '#222', fontSize: 13, fontWeight: '500' },
  divider: { height: 2, backgroundColor: '#F0F0F0' },
  pdfRow: {
    flexDirection: 'row', alignItems: 'center', gap: 12,
    backgroundColor: '#FFF5F5', padding: 10, borderRadius: 8,
  },
  pdfIcon: { backgroundColor: '#E53935', borderRadius: 6, padding: 6 },
  pdfIconText: { color: '#fff', fontSize: 10, fontWeight: 'bold' },
  pdfInfo: { flex: 1 },
  pdfName: { fontSize: 13, fontWeight: '500', color: '#222' },
  pdfMeta: { fontSize: 11, color: '#888' },
  readyBanner: { backgroundColor: '#E8F5E9', borderRadius: 8, padding: 12, gap: 4 },
  readyText: { fontWeight: 'bold', color: '#2E7D32', fontSize: 13 },
  readySubtext: { color: '#555', fontSize: 12 },
});
