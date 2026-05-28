import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';        
import SubmitButton from '../components/SubmitButton';
import ReviewBanner from '../components/ReviewBanner';
import ActivityCard from '../components/ActivityCard';
import styles from '../envioHorasStyles'; // estilo do fundo do card/tela

export default function App() {
  return (
    <View styles={styles.container}>
      <Header />

      <View styles={styles.contentWrapper}>
        <ScrollView styles={styles.content}>
          <ReviewBanner />
          <ActivityCard />
        </ScrollView>
      </View>

      <SubmitButton />
    </View>
  );
}

