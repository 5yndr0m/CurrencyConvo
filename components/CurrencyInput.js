import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const CURRENCIES = ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'LKR'];

export default function CurrencyInput({ amount, currency, onAmountChange, onCurrencyChange, disabled }) {
  return (
    <View style={styles.container}>
      <Button
        mode="outlined"
        onPress={() => {
          const currentIndex = CURRENCIES.indexOf(currency);
          const nextIndex = (currentIndex + 1) % CURRENCIES.length;
          onCurrencyChange(CURRENCIES[nextIndex]);
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