import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList } from 'react-native';
import { useState } from 'react';

export default function Dropdown({ label, opcoes, valor, onSelecionar }) {

  const [aberto, setAberto] = useState(false); // começa fechado, abre apenas ao clicar 

  return (
    <View>
      <Text style={styles.label}>{label}</Text>

      <TouchableOpacity style={styles.dropdown} onPress={() => setAberto(true)}> {/* ao clicar, abre o modal */}
        <Text style={valor ? styles.textoSelecionado : styles.textoPlaceholder}>
          {valor || 'Selecione...'}
        </Text>
        <Text>▼</Text>
      </TouchableOpacity>

      <Modal visible={aberto} transparent animationType="slide"> {/* animaçao do modal, com fundo transparente */}
        <View style={styles.fundo}>
          <View style={styles.modal}>

            <Text style={styles.modalTitulo}>{label}</Text> {/* título do modal */}

            <FlatList // lista as opções de curso 
              data={opcoes}
              keyExtractor={(item) => item} // cada item tem um id
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.opcao}
                  onPress={() => {
                    onSelecionar(item);  // salva 
                    setAberto(false); // ffecha o modal
                  }}
                >
                  <Text style={styles.opcaoTexto}>{item}</Text>
                </TouchableOpacity>
              )}
            />

            <TouchableOpacity style={styles.fechar} onPress={() => setAberto(false)}>
              <Text style={styles.fecharTexto}>Cancelar</Text>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
    marginTop: 12,
  },
  dropdown: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textoPlaceholder: {
    fontSize: 14,
    color: '#999',
  },
  textoSelecionado: {
    fontSize: 14,
    color: '#333',
  },
  fundo: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modal: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: '60%',
  },
  modalTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  opcao: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  opcaoTexto: {
    fontSize: 14,
    color: '#333',
  },
  fechar: {
    marginTop: 12,
    alignItems: 'center',
    padding: 12,
  },
  fecharTexto: {
    color: '#999',
    fontSize: 14,
  },
});