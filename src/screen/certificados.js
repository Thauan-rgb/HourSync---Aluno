import React from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Header from '../components/headerCertificados';
import ListaCertificados from '../components/cardCertificados';
import styles from '../styles/certificadosStyles';

export default function CertificadosScreen() {
  return (
    <View style={styles.container}>
      
      <Header />

      {/* Área branca sobreposta */}
      <View style={styles.body}>
        
        {/* BARRA DE BUSCA E FILTRO */}
        <View style={localStyles.searchRow}>
          <View style={localStyles.searchInputBox}>
            <Ionicons name="search" size={18} color="#999" />
            <TextInput 
              style={localStyles.searchInput} 
              placeholder="Buscar certificado" 
              placeholderTextColor="#999"
            />
          </View>
          <TouchableOpacity style={localStyles.filterButton}>
            <Ionicons name="options-outline" size={18} color="#4A90E2" />
            <Text style={localStyles.filterText}>Filtrar</Text>
          </TouchableOpacity>
        </View>

        {/* CHIPS DE STATUS (Rolagem Horizontal) */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={localStyles.chipScroll} contentContainerStyle={localStyles.chipContainer}>
          <TouchableOpacity style={[localStyles.chip, { borderColor: '#4A90E2' }]}>
            <Text style={[localStyles.chipText, { color: '#4A90E2' }]}>Todos 12</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[localStyles.chip, { borderColor: '#FABB05' }]}>
            <Ionicons name="time" size={14} color="#FABB05" />
            <Text style={[localStyles.chipText, { color: '#FABB05' }]}>Pendentes 3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[localStyles.chip, { borderColor: '#EA4335' }]}>
            <Ionicons name="close-circle" size={14} color="#EA4335" />
            <Text style={[localStyles.chipText, { color: '#EA4335' }]}>Rejeitados 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[localStyles.chip, { borderColor: '#34A853' }]}>
            <Ionicons name="checkmark-circle" size={14} color="#34A853" />
            <Text style={[localStyles.chipText, { color: '#34A853' }]}>Aprovados 7</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* LISTA DE CARDS */}
        <ScrollView showsVerticalScrollIndicator={false}>
          
          <ListaCertificados 
            tipo="aprovado"
            titulo="Participação em seminários"
            categoria="Categoria . Extensão"
            dataEnvio="Enviado em 25/04/2026 às 14:33"
            horas="4h validadas"
            dataAprovacao="Aprovado em 29/04/2026"
          />

          <ListaCertificados 
            tipo="pendente"
            titulo="Participação em workshop"
            categoria="Categoria . Extensão"
            dataEnvio="Enviado em 25/04/2026 às 14:33"
            horas="10h solicitadas"
            dataAprovacao="Aguardando análise"
          />

          <ListaCertificados 
            tipo="rejeitado"
            titulo="Representação estudantil"
            categoria="Categoria . Extensão"
            dataEnvio="Enviado em 25/04/2026 às 14:33"
            horas="10h solicitadas"
            dataAprovacao="Rejeitado em 29/04/2026"
          />

          <ListaCertificados 
            tipo="aprovado"
            titulo="Visitas técnicas"
            categoria="Categoria . Extensão"
            dataEnvio="Enviado em 25/04/2026 às 14:33"
            horas="4h validadas"
            dataAprovacao="Aprovado em 29/04/2026"
          />
          
          {/* Espaço extra no final da lista */}
          <View style={{ height: 40 }} />
        </ScrollView>

      </View>
    </View>
  );
}

// Estilos locais apenas para a busca e filtros desta tela
const localStyles = StyleSheet.create({
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    gap: 12,
  },
  searchInputBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: '#333',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 12,
    height: 44,
    justifyContent: 'center',
  },
  filterText: {
    color: '#4A90E2',
    fontWeight: 'bold',
    fontSize: 14,
  },
  chipScroll: {
    flexGrow: 0,
    marginBottom: 20,
  },
  chipContainer: {
    gap: 8,
    paddingRight: 20,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    gap: 4,
  },
  chipText: {
    fontWeight: 'bold',
    fontSize: 13,
  },
});