import { View, StyleSheet, ScrollView } from 'react-native';
import Header from './components/headerEnvioHoras1';        // ← header 
import Formulario from './components/formularioEnvioHoras1'; // ← formularios
import Botao from './components/botao';
import styles from './envioHorasStyles'; // estilo do fundo do card/tela

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Formulario />
        <Botao titulo="Próximo" />
      </ScrollView>
    </View>
  );
}
