import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screen/login';
import EnvioHoras2Screen from '../screen/envioHoras2';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="EnvioHoras" component={EnvioHoras2Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
