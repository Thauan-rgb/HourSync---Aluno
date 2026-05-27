import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ActivityCard() {
  return (

    // CARD 1 COM OS DADOS DAS ATIVIDADES (CURSO-CATEGORIA...)
    <View style={styles.card}>

      {/* Dados da atividade */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Dados da atividade</Text>
        
      </View>

      {/* Curso */}
      <View style={styles.dataRow}>
        <Text style={styles.dataLabel}>Curso</Text>
        <Text style={styles.dataValue}>Análise de Sistemas</Text>
      </View>

      {/* Categoria */}
      <View style={styles.dataRow}>
        <Text style={styles.dataLabel}>Categoria</Text>
        <Text style={styles.dataValue}>Atividades de Ensino</Text>
      </View>

      {/* Subcategoria */}
      <View style={styles.dataRow}>
        <Text style={styles.dataLabel}>Subcategoria</Text>
        <Text style={styles.dataValue}>1.8</Text>
      </View>

      {/* Horas da Categoria */}
      <View style={styles.dataRow}>
        <Text style={styles.dataLabel}>Horas da Categoria</Text>
        <Text style={styles.dataValue}>10h</Text>
      </View>

      {/* Data de Submissão */}
      <View style={styles.dataRow}>
        <Text style={styles.dataLabel}>Data de Submissão</Text>
        <Text style={styles.dataValue}>07/05/2026</Text>
      </View>

      {/* Divisão entre o card das atividades e do certificado */}
      <View style={styles.divider} />

      {/* Certificado */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Certificado</Text>
      </View>

      {/* Ícone do PDF e Escritas */}
      <View style={styles.pdfRow}>
        <View style={styles.pdfIcon}>
          <Text style={styles.pdfIconText}>PDF</Text>
        </View>
        <View style={styles.pdfInfo}>
          <Text style={styles.pdfName}>certificado_evento.pdf</Text>
          <Text style={styles.pdfMeta}>24KB • enviado 07/05/2026</Text>
        </View>
      </View>

      {/* Retângulo verde de pronto */}
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

  // CARD -- Container branco com bordas arredondadas
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    gap: 12,
  },

  // Cabeçalho de cada seção (título + botão editar)
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // Título de cada seção
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#222',
  },

  // Link de edição
  editLink: {
    color: '#208AEF',
    fontSize: 13,
  },

  // Linha de dado (label + valor lado a lado)
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    paddingBottom: 20,
  },

  // Label da linha de dado (LADO ESQUERDO)
  dataLabel: {
    color: '#888',
    fontSize: 13,
  },

  // Valor da linha de dado (LADO DIREITO)
  dataValue: {
    color: '#222',
    fontSize: 13,
    fontWeight: '500',
  },

  // Divisor horizontal entre seções
  divider: {
    height: 2,
    backgroundColor: '#F0F0F0',
  },

  // RETANGULO DO PDF
  pdfRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#FFF5F5',
    padding: 10,
    borderRadius: 8,
  },

  // Ícone vermelho do PDF
  pdfIcon: {
    backgroundColor: '#E53935',
    borderRadius: 6,
    padding: 6,
  },

  // Texto "PDF" dentro do ícone
  pdfIconText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },

  // Container das informações do PDF
  pdfInfo: {
    flex: 1,
  },

  // Nome do arquivo PDF
  pdfName: {
    fontSize: 13,
    fontWeight: '500',
    color: '#222',
  },

  // Metadados do PDF (tamanho e data)
  pdfMeta: {
    fontSize: 11,
    color: '#888',
  },

  // RETANGULO VERDE -- Confirmação de pronto para envio
  readyBanner: {
    backgroundColor: '#E8F5E9',
    borderRadius: 8,
    padding: 12,
    gap: 4,
  },

  // Título do banner verde
  readyText: {
    fontWeight: 'bold',
    color: '#2E7D32',
    fontSize: 13,
  },

  // Subtítulo do banner verde
  readySubtext: {
    color: '#555',
    fontSize: 12,
  },

});