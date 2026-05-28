import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';
import Dropdown from './dropdown';
import { TextInputMask } from 'react-native-masked-text';
import TirarFotoEpdf from './tirarFotoEpdf';
export default function Formulario() {

  const [curso, setCurso] = useState('');
  const [atividade, setAtividade] = useState('');
  const [subcategoria, setSubcategoria] = useState('');
  const [horasCategoria, setHorasCategoria] = useState('');
  const [horasRestantes, setHorasRestantes] = useState('');
  const [data, setData] = useState('');

  return (
    <View style={styles.formulario}>

      <Dropdown
        label="Curso"
        opcoes={['Engenharia', 'Medicina', 'Direito', 'Administração']}
        valor={curso}
        onSelecionar={setCurso}
      />

      <Dropdown
        label="Selecione a Atividade"
        opcoes={['Monitoria', 'Extensão', 'Pesquisa', 'Estágio']}
        valor={atividade}
        onSelecionar={setAtividade}
      />

      <Dropdown
        label="Selecione a Subcategoria"
        opcoes={['Categoria A', 'Categoria B', 'Categoria C']}
        valor={subcategoria}
        onSelecionar={setSubcategoria}
      />

      {/* HORAS */}
      <View style={styles.horas}>
        <View style={styles.horasColuna}>
          <Text style={styles.label}>Horas Categoria</Text>
          <TextInput
            style={styles.input}
            placeholder="10h"
            placeholderTextColor="#999"
            value={horasCategoria}
            onChangeText={setHorasCategoria}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.horasColuna}>
          <Text style={styles.label}>Horas Restantes</Text>
          <TextInput
            style={styles.input}
            placeholder="55h"
            placeholderTextColor="#999"
            value={horasRestantes}
            onChangeText={setHorasRestantes}
            keyboardType="numeric"
          />
        </View>
      </View>

      {/* DATA */}
       <Text style={styles.label}>Data de Submissão</Text>
      <TextInputMask
        type={'datetime'}
        options={{ format: 'DD/MM/YYYY' }}
        value={data}
        onChangeText={setData}
        style={styles.input}
        placeholder="dd/mm/aaaa"
        placeholderTextColor="#999"
        keyboardType="numeric"
      />
      {/* aqui puxa os componentes de tirar foto ou subir pdf */}
      <TirarFotoEpdf /> 
      
    </View>
  );
}

const styles = StyleSheet.create({
  formulario: {
    backgroundColor: '#fff',
    margin: 12,
    borderRadius: 12,
    padding: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: '#333',
  },
  horas: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 12,
  },
  horasColuna: {
    flex: 1,
  },
});