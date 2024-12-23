// App.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider as PaperProvider, MD3LightTheme } from 'react-native-paper';
import CurrencyConverter from './components/CurrencyConverter';

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#6750A4',
    secondary: '#625B71',
  },
};

export default function App() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        {showSettings ? (
          <Settings onBack={() => setShowSettings(false)} />
        ) : (
          <>
            <CurrencyConverter />
            <Button title="Settings" onPress={() => setShowSettings(true)} />
          </>
        )}
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
    paddingTop: 50,
  },
});