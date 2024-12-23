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

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <CurrencyConverter />
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});