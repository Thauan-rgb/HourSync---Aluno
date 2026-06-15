import { AuthProvider } from './src/contexto/AuthContext';
import { NotificacoesProvider } from './src/contexto/NotificacoesContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <AuthProvider>
      <NotificacoesProvider>
        <AppNavigator />
      </NotificacoesProvider>
    </AuthProvider>
  );
}
