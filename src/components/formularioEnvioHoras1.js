import { View, Text, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import Dropdown from './dropdown';
import TirarFotoEpdf from './tirarFotoEpdf';
import { listarCursos } from '../api/cursos';
import { listarCategorias } from '../api/categorias';
import { useAuth } from '../contexto/AuthContext';

export default function Formulario({
  cursoNome, setCursoNome, setCursoId,
  categoriaNome, setCategoriaNome, setCategoriaId,
  horas, setHoras,
  data, setData,
  onArquivoSelecionado,
}) {
  const { token } = useAuth();
  const [cursos, setCursos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregar() {
      try {
        const [c, cat] = await Promise.all([listarCursos(token), listarCategorias(token)]);
        setCursos(Array.isArray(c) ? c : []);
        setCategorias(Array.isArray(cat) ? cat : []);
      } catch {
        /* silencioso */
      } finally {
        setCarregando(false);
      }
    }
    carregar();
  }, []);

  function handleDataChange(text) {
    const numeros = text.replace(/\D/g, '');
    let formatado = numeros;
    if (numeros.length > 2) formatado = numeros.slice(0, 2) + '/' + numeros.slice(2);
    if (numeros.length > 4) formatado = numeros.slice(0, 2) + '/' + numeros.slice(2, 4) + '/' + numeros.slice(4, 8);
    setData(formatado);
  }

  function handleSelecionarCurso(nome) {
    setCursoNome(nome);
    const encontrado = cursos.find((c) => c.nome === nome);
    if (encontrado) setCursoId(encontrado._id);
  }

  function handleSelecionarCategoria(nome) {
    setCategoriaNome(nome);
    const encontrada = categorias.find((c) => c.nome === nome);
    if (encontrada) setCategoriaId(encontrada._id);
  }

  if (carregando) {
    return (
      <View style={[styles.formulario, { alignItems: 'center', paddingVertical: 40 }]}>
        <ActivityIndicator color="#56C3DC" />
      </View>
    );
  }

  return (
    <View style={styles.formulario}>
      <Dropdown
        label="Curso"
        opcoes={cursos.map((c) => c.nome)}
        valor={cursoNome}
        onSelecionar={handleSelecionarCurso}
      />

      <Dropdown
        label="Selecione a Categoria"
        opcoes={categorias.map((c) => c.nome)}
        valor={categoriaNome}
        onSelecionar={handleSelecionarCategoria}
      />

      <View style={styles.horas}>
        <View style={styles.horasColuna}>
          <Text style={styles.label}>Horas</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 10"
            placeholderTextColor="#999"
            value={horas}
            onChangeText={setHoras}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.horasColuna}>
          <Text style={styles.label}>Data de Submissão</Text>
          <TextInput
            style={styles.input}
            placeholder="dd/mm/aaaa"
            placeholderTextColor="#999"
            value={data}
            onChangeText={handleDataChange}
            keyboardType="numeric"
            maxLength={10}
          />
        </View>
      </View>

      <TirarFotoEpdf onArquivoSelecionado={onArquivoSelecionado} />
    </View>
  );
}

const styles = StyleSheet.create({
  formulario: { backgroundColor: '#fff', margin: 12, borderRadius: 12, padding: 12 },
  label: { fontSize: 14, fontWeight: 'bold', color: '#333', marginBottom: 6, marginTop: 12 },
  input: {
    backgroundColor: '#fff', borderWidth: 1, borderColor: '#ccc',
    borderRadius: 8, padding: 12, fontSize: 14, color: '#333',
  },
  horas: { flexDirection: 'row', gap: 12, marginTop: 12 },
  horasColuna: { flex: 1 },
});
