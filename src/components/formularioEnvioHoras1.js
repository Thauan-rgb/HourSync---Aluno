import { View, Text, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import Dropdown from './dropdown';
import TirarFotoEpdf from './tirarFotoEpdf';
import { listarCursos } from '../api/cursos';
import { listarCategorias } from '../api/categorias';
import { listarAtividades } from '../api/atividades';
import { useAuth } from '../contexto/AuthContext';

export default function Formulario({
  cursoNome, setCursoNome, setCursoId, cursoId,
  categoriaNome, setCategoriaNome, setCategoriaId, categoriaId,
  atividadeNome, setAtividadeNome, setAtividadeId,
  horas, setHoras,
  data, setData,
  onArquivoSelecionado,
}) {
  const { token, usuario } = useAuth();
  const [cursos, setCursos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [todasAtividades, setTodasAtividades] = useState([]);
  const [atividadesFiltradas, setAtividadesFiltradas] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregar() {
      try {
        const [todosCursos, cat, atv] = await Promise.all([
          listarCursos(token),
          listarCategorias(token),
          listarAtividades(token),
        ]);

        const cursoIdsDoAluno = (usuario?.cursoId || []).map((c) =>
          (c._id || c)?.toString()
        );
        const cursosDoAluno =
          cursoIdsDoAluno.length > 0
            ? (Array.isArray(todosCursos)
                ? todosCursos.filter((c) => cursoIdsDoAluno.includes(c._id?.toString()))
                : [])
            : (Array.isArray(todosCursos) ? todosCursos : []);

        const catSemDup = Array.isArray(cat)
          ? cat.filter((c, i, arr) => arr.findIndex((x) => x.nome === c.nome) === i)
          : [];

        setCursos(cursosDoAluno);
        setCategorias(catSemDup);
        setTodasAtividades(Array.isArray(atv) ? atv : []);
      } catch {
        /* silencioso */
      } finally {
        setCarregando(false);
      }
    }
    carregar();
  }, [token]);

  useEffect(() => {
    if (!categoriaId) {
      setAtividadesFiltradas([]);
      setAtividadeNome('');
      setAtividadeId('');
      return;
    }
    const filtradas = todasAtividades.filter((a) => {
      const aCatId = a.categoriaId?._id || a.categoriaId;
      return aCatId?.toString() === categoriaId?.toString();
    });
    setAtividadesFiltradas(filtradas);
    setAtividadeNome('');
    setAtividadeId('');
  }, [categoriaId, todasAtividades]);

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

  function handleSelecionarAtividade(nome) {
    setAtividadeNome(nome);
    const encontrada = atividadesFiltradas.find((a) => a.nome === nome);
    if (encontrada) setAtividadeId(encontrada._id);
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

      <Dropdown
        label="Selecione a Atividade"
        opcoes={atividadesFiltradas.map((a) => a.nome)}
        valor={atividadeNome}
        onSelecionar={handleSelecionarAtividade}
        desabilitado={!categoriaId}
        placeholder={!categoriaId ? 'Selecione uma categoria primeiro' : 'Selecione...'}
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
