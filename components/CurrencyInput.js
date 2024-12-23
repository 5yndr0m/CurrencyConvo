// components/CurrencyInput.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function CurrencyInput({ amount, currency, onAmountChange, onCurrencyChange }) {

  return (
    <View style={styles.container}>

      <TextInput
        mode="outlined"
        label="Amount"
        value={amount}
        onChangeText={onAmountChange}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button mode="outlined" onPress={onCurrencyChange}>
        {currency}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    marginRight: 8,
  },
});