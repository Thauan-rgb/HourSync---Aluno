import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
 
import LoginScreen from '../screen/login';
import EsqueceuSenhaScreen from '../screen/EsqueceuSenha';
import Dashboard from '../screen/Dashboard';
import EnvioHoras1Screen from '../screen/envioHoras1';
import EnvioHoras2Screen from '../screen/envioHoras2';
import NotificacoesScreen from '../screen/notificacoes';
import CertificadosScreen from '../screen/certificados';
import CustomDrawer from '../components/Customdrawer';
 
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
 
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: { width: 280 },
      }}
    >
      <Drawer.Screen name="Dashboard"    component={Dashboard}          />
      <Drawer.Screen name="EnvioHoras1"  component={EnvioHoras1Screen}  />
      <Drawer.Screen name="EnvioHoras2"  component={EnvioHoras2Screen}  />
      <Drawer.Screen name="Notificacoes" component={NotificacoesScreen} />
      <Drawer.Screen name="Certificados" component={CertificadosScreen} />
    </Drawer.Navigator>
  );
}
 
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login"         component={LoginScreen}         />
        <Stack.Screen name="EsqueceuSenha" component={EsqueceuSenhaScreen} />
        <Stack.Screen name="Main"          component={DrawerNavigator}     />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
