import { View, ScrollView, Alert } from 'react-native';
import { useState } from 'react';
import Header from '../components/headerEnvioHoras1';
import Formulario from '../components/formularioEnvioHoras1';
import Botao from '../components/botao';
import styles from '../styles/envioHorasStyles';

export default function EnvioHoras1Screen({ navigation }) {
  const [cursoNome, setCursoNome] = useState('');
  const [cursoId, setCursoId] = useState('');
  const [categoriaNome, setCategoriaNome] = useState('');
  const [categoriaId, setCategoriaId] = useState('');
  const [atividadeNome, setAtividadeNome] = useState('');
  const [atividadeId, setAtividadeId] = useState('');
  const [horas, setHoras] = useState('');
  const [data, setData] = useState('');
  const [arquivo, setArquivo] = useState(null);

  function handleProximo() {
    if (!cursoId || !categoriaId || !atividadeId || !horas) {
      Alert.alert('Atenção', 'Preencha curso, categoria, atividade e horas.');
      return;
    }

    let dataConvertida = undefined;
    if (data) {
      const partes = data.split('/');
      if (partes.length === 3 && partes[2].length === 4) {
        dataConvertida = ${partes[2]}-${partes[1]}-${partes[0]};
      }
    }

    navigation.navigate('EnvioHoras2', {
      cursoNome, cursoId,
      categoriaNome, categoriaId,
      atividadeNome, atividadeId,
      horas, data: dataConvertida, arquivo,
    });
  }

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Formulario
          cursoNome={cursoNome}         setCursoNome={setCursoNome}         setCursoId={setCursoId}         cursoId={cursoId}
          categoriaNome={categoriaNome} setCategoriaNome={setCategoriaNome} setCategoriaId={setCategoriaId} categoriaId={categoriaId}
          atividadeNome={atividadeNome} setAtividadeNome={setAtividadeNome} setAtividadeId={setAtividadeId}
          horas={horas}                 setHoras={setHoras}
          data={data}                   setData={setData}
          onArquivoSelecionado={setArquivo}
        />
        <Botao titulo="Próximo" onPress={handleProximo} />
      </ScrollView>
    </View>
  );
}
