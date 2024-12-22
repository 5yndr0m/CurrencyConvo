import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import CurrencySelector from './CurrencySelector';

const CurrencyInput = ({ amount, currency, onAmountChange, onCurrencyChange }) => {
  return (
    <View style={styles.container}>
      <CurrencySelector 
        selectedCurrency={currency}
        onCurrencyChange={onCurrencyChange}
      />
      <TextInput 
        mode="outlined"
        value={amount}
        onChangeText={onAmountChange}
        keyboardType="numeric"
        style={styles.input}
        placeholder="0.00"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 8,
  },
  input: {
    backgroundColor: '#fff',
  },
});

export default CurrencyInput;