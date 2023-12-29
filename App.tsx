import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FormularioScreen from './screens/FormularioScreen';
import LecturaScreen from './screens/LecturaScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
     <LecturaScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
