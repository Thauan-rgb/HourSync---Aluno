import { View, Text, StyleSheet } from 'react-native';

export default function ActivityCard({ dados = {} }) {
  const nomeArquivo = dados.arquivo?.fileName || dados.arquivo?.name || (dados.arquivo ? 'certificado.pdf' : null);
  const dataFormatada = dados.data ? new Date(dados.data).toLocaleDateString('pt-BR') : '—';

  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>Dados da atividade</Text>

      <View style={styles.dataRow}>
        <Text style={styles.dataLabel}>Curso</Text>
        <Text style={styles.dataValue}>{dados.cursoNome || '—'}</Text>
      </View>
      <View style={styles.dataRow}>
        <Text style={styles.dataLabel}>Categoria</Text>
        <Text style={styles.dataValue}>{dados.categoriaNome || '—'}</Text>
      </View>
      <View style={styles.dataRow}>
        <Text style={styles.dataLabel}>Atividade</Text>
        <Text style={styles.dataValue}>{dados.atividadeNome || '—'}</Text>
      </View>
      <View style={styles.dataRow}>
        <Text style={styles.dataLabel}>Horas</Text>
        <Text style={styles.dataValue}>{dados.horas ? `${dados.horas}h` : '—'}</Text>
      </View>
      <View style={styles.dataRow}>
        <Text style={styles.dataLabel}>Data de Submissão</Text>
        <Text style={styles.dataValue}>{dataFormatada}</Text>
      </View>

      <View style={styles.divider} />

      <Text style={styles.sectionTitle}>Certificado</Text>

      {nomeArquivo ? (
        <View style={styles.pdfRow}>
          <View style={styles.pdfIcon}>
            <Text style={styles.pdfIconText}>PDF</Text>
          </View>
          <Text style={styles.pdfName}>{nomeArquivo}</Text>
        </View>
      ) : (
        <Text style={styles.semArquivo}>Nenhum arquivo selecionado.</Text>
      )}

      <View style={styles.readyBanner}>
        <Text style={styles.readyText}>Pronto para envio</Text>
        <Text style={styles.readySubtext}>Ao enviar, suas informações serão encaminhadas para análise da coordenação.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', borderRadius: 16, padding: 16, gap: 12 },
  sectionTitle: { fontWeight: 'bold', fontSize: 15, color: '#222' },
  dataRow: { flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#F0F0F0', paddingBottom: 20 },
  dataLabel: { color: '#888', fontSize: 13 },
  dataValue: { color: '#222', fontSize: 13, fontWeight: '500' },
  divider: { height: 2, backgroundColor: '#F0F0F0' },
  pdfRow: { flexDirection: 'row', alignItems: 'center', gap: 12, backgroundColor: '#FFF5F5', padding: 10, borderRadius: 8 },
  pdfIcon: { backgroundColor: '#E53935', borderRadius: 6, padding: 6 },
  pdfIconText: { color: '#fff', fontSize: 10, fontWeight: 'bold' },
  pdfName: { fontSize: 13, fontWeight: '500', color: '#222', flex: 1 },
  semArquivo: { fontSize: 13, color: '#888', fontStyle: 'italic' },
  readyBanner: { backgroundColor: '#E8F5E9', borderRadius: 8, padding: 12, gap: 4 },
  readyText: { fontWeight: 'bold', color: '#2E7D32', fontSize: 13 },
  readySubtext: { color: '#555', fontSize: 12 },
});
