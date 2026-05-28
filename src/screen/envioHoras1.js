import { View, StyleSheet, ScrollView } from 'react-native';
import Header from './componentes/headerEnvioHoras1';        // ← header 
import Formulario from './componentes/formularioEnvioHoras1'; // ← formularios
import Botao from './componentes/botao';
import styles from './AppStyles'; // estilo do fundo do card/tela

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
