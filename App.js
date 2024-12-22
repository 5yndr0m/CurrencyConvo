import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import CurrencyConverter from './components/CurrencyConverter';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <CurrencyConverter />
        <StatusBar style="auto" />
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
});
