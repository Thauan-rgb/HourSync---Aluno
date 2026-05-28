import { View, ScrollView } from 'react-native';
import Header from '../components/headerEnvioHoras1';
import Formulario from '../components/formularioEnvioHoras1';
import Botao from '../components/botao';
import styles from '../styles/envioHorasStyles';

export default function EnvioHoras1Screen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Formulario />
        <Botao titulo="Próximo" onPress={() => navigation.navigate('EnvioHoras2')} />
      </ScrollView>
    </View>
  );
}
