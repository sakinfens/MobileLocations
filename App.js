import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LocationInput from './components/LocationInput';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>It's Time</Text>
      <LocationInput/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    flex: 1,
    paddingTop:100,
    backgroundColor: 'blue',
  },
});
