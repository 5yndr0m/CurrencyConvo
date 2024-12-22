import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import CurrencyConverter from './components/CurrencyConverter';
import { SafeAreaView } from 'react-native-safe-area-context';
// import DirectionArrow from './components/DirectionArrow';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <CurrencyConverter />
          {/* <DirectionArrow /> */}
          <StatusBar style="auto" />
        </ScrollView>
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
