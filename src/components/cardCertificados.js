import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// O componente agora recebe as informações dinamicamente
export default function ListaCertificados({ tipo, titulo, categoria, dataEnvio, horas, dataAprovacao }) {
  
  // Define as cores e ícones baseados no tipo do certificado
  let corPrincipal = '#34A853'; // Verde Padrão
  let iconeStatus = 'checkmark-circle';
  let textoStatus = 'Aprovado';

  if (tipo === 'pendente') {
    corPrincipal = '#FABB05'; // Amarelo
    iconeStatus = 'time';
    textoStatus = 'Pendente';
  } else if (tipo === 'rejeitado') {
    corPrincipal = '#EA4335'; // Vermelho
    iconeStatus = 'close-circle';
    textoStatus = 'Rejeitadas';
  }

  return (
    <TouchableOpacity style={[styles.card, { borderColor: corPrincipal }]}>
      
      {/* 1. Bloco da Esquerda: Ícone PDF */}
      <View style={[styles.pdfBox, { backgroundColor: corPrincipal }]}>
        <Text style={styles.pdfText}>PDF</Text>
      </View>

      {/* 2. Bloco Central: Informações do Curso */}
      <View style={styles.infoCenter}>
        <Text style={styles.titulo} numberOfLines={1}>{titulo}</Text>
        <Text style={styles.subtexto}>{categoria}</Text>
        <Text style={styles.subtexto}>{dataEnvio}</Text>
      </View>

      {/* 3. Bloco da Direita: Status e Horas */}
      <View style={styles.infoRight}>
        <View style={styles.statusRow}>
          <Ionicons name={iconeStatus} size={14} color={corPrincipal} />
          <Text style={[styles.statusText, { color: corPrincipal }]}>{textoStatus}</Text>
        </View>
        <Text style={styles.horasText}>{horas}</Text>
        <Text style={styles.subtextoRight}>{dataAprovacao}</Text>
      </View>

      {/* Seta final */}
      <Ionicons name="chevron-forward" size={20} color="#666" style={{ marginLeft: 8 }} />
      
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    width: '100%',
  },
  pdfBox: {
    width: 44,
    height: 54,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  pdfText: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 14,
  },
  infoCenter: {
    flex: 1, // Ocupa o espaço disponível e empurra o status para a direita
    justifyContent: 'center',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
    marginBottom: 2,
  },
  subtexto: {
    color: '#888',
    fontSize: 10,
    marginTop: 1,
  },
  infoRight: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 2,
  },
  statusText: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  horasText: {
    fontWeight: 'bold',
    fontSize: 10,
    color: '#333',
  },
  subtextoRight: {
    color: '#888',
    fontSize: 9,
    marginTop: 1,
  },
});