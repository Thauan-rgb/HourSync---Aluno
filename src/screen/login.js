import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';

import Header from '../components/HeaderLogin';
import LoginForm from '../components/LoginForm';
import RememberRow from '../components/RememberRow';
import ContactSection from '../components/ContactSection';

export default function App() {
  return (
    <ScrollView style={styles.wrapper} contentContainerStyle={styles.container}>

      <Header />

      <View style={styles.content}>
        <LoginForm />
        <RememberRow />
        <ContactSection />
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },

  container: {
    flexGrow: 1,
  },

  content: {
    backgroundColor: '#fff',
    marginTop: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    paddingTop: 40,
    alignItems: 'center',
  },
});
