// App.js
import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Importa a sua Sidebar Customizada (Olivia Rodrigo)
import CustomDrawerContent from './components/CustomDrawer';

// Importa a nova tela de Horas que criamos no Passo 1
import HorasScreen from './HorasScreen'; 

// --- OUTRAS TELAS DE EXEMPLO ---
function DummyScreen({ route }) {
  return (
    <View style={styles.dummyContainer}>
      <Text style={styles.dummyText}>Você está na tela: {route.name}</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={({ navigation }) => ({
          headerShown: true, 
          headerTransparent: true, 
          headerTitle: '', 
          
          // Ícone padrão de menu redondo do seu Figma (para as telas normais)
          headerLeft: () => (
            <TouchableOpacity 
              onPress={() => navigation.openDrawer()} 
              style={styles.globalMenuIcon}
            >
              <MaterialCommunityIcons name="tune" size={22} color="#fff" />
            </TouchableOpacity>
          ),

          drawerActiveBackgroundColor: 'rgba(255, 255, 255, 0.2)', 
          drawerActiveTintColor: '#fff', 
          drawerInactiveTintColor: '#fff', 
          drawerLabelStyle: { fontSize: 16, marginLeft: -10 },
        })}
      >
        <Drawer.Screen 
          name="Dashboard" 
          component={DummyScreen} 
          options={{ drawerIcon: ({ color }) => <MaterialCommunityIcons name="view-dashboard-outline" size={24} color={color} /> }} 
        />
        
        {/* ATUALIZADO: Agora "Horas" chama a sua tela real com cabeçalho azul e stepper */}
        <Drawer.Screen 
          name="Horas" 
          component={HorasScreen} 
          options={{ 
            headerShown: false, // Escondemos o cabeçalho global do App.js aqui, porque a HorasScreen já tem o seu próprio cabeçalho azul!
            drawerIcon: ({ color }) => <MaterialCommunityIcons name="plus-circle-outline" size={24} color={color} /> 
          }} 
        />
        
        <Drawer.Screen 
          name="Certificados" 
          component={DummyScreen} 
          options={{ drawerIcon: ({ color }) => <MaterialCommunityIcons name="certificate-outline" size={24} color={color} /> }} 
        />
        <Drawer.Screen 
          name="Configurações" 
          component={DummyScreen} 
          options={{ drawerIcon: ({ color }) => <MaterialCommunityIcons name="cog-outline" size={24} color={color} /> }} 
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  dummyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4eb5e5' },
  dummyText: { fontSize: 20, color: '#fff', fontWeight: 'bold' },
  globalMenuIcon: {
    marginLeft: 20,
    marginTop: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  }
});