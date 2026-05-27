import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';        
import SubmitButton from '../components/SubmitButton';
import ReviewBanner from '../components/ReviewBanner';
import ActivityCard from '../components/ActivityCard';
import styles from '../AppStyles';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.contentWrapper}>
        <ScrollView style={styles.content}>
          <ReviewBanner />
          <ActivityCard />
        </ScrollView>
      </View>

      <SubmitButton />
    </View>
  );
}

