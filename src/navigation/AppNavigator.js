import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screen/login';
import EnvioHoras1Screen from '../screen/envioHoras1';
import EnvioHoras2Screen from '../screen/envioHoras2';
import EsqueceuSenhaScreen from '../screen/EsqueceuSenha';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="EsqueceuSenha" component={EsqueceuSenhaScreen} />
        <Stack.Screen name="EnvioHoras1" component={EnvioHoras1Screen} />
        <Stack.Screen name="EnvioHoras2" component={EnvioHoras2Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
