// components/CurrencyInput.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function CurrencyInput({ amount, currency, onAmountChange, onCurrencyChange }) {

  return (
    <View style={styles.container}>
      <Button
        mode="outlined"
        onPress={() => {
          const currentIndex = currencyList.indexOf(currency);
          const nextIndex = (currentIndex + 1) % currencyList.length;
          onCurrencyChange(currencyList[nextIndex]);
        }}
        style={styles.button}
      >
        {currency}
      </Button>

      <TextInput
        mode="outlined"
        value={amount}
        onChangeText={onAmountChange}
        keyboardType="numeric"
        style={styles.input}
        disabled={disabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  button: {
    flex: 1,
  },
  input: {
    flex: 2,
  },
});