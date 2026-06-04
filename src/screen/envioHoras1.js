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
  const [horas, setHoras] = useState('');
  const [data, setData] = useState('');
  const [arquivo, setArquivo] = useState(null);

  function handleProximo() {
    if (!cursoId || !categoriaId || !horas) {
      Alert.alert('Atenção', 'Preencha curso, categoria e horas.');
      return;
    }

    let dataConvertida = undefined;
    if (data) {
      const partes = data.split('/');
      dataConvertida = `${partes[2]}-${partes[1]}-${partes[0]}`;
    }

    navigation.navigate('Main', {
      screen: 'EnvioHoras2',
      params: {
        cursoNome, cursoId,
        categoriaNome, categoriaId,
        horas, data: dataConvertida, arquivo,
      },
    });
  }

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Formulario
          cursoNome={cursoNome}        setCursoNome={setCursoNome}     setCursoId={setCursoId}
          categoriaNome={categoriaNome} setCategoriaNome={setCategoriaNome} setCategoriaId={setCategoriaId}
          horas={horas}               setHoras={setHoras}
          data={data}                 setData={setData}
          onArquivoSelecionado={setArquivo}
        />
        <Botao titulo="Próximo" onPress={handleProximo} />
      </ScrollView>
    </View>
  );
}
