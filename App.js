import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BookingScreen from './src/home/BookingScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <BookingScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
});
