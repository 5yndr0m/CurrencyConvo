import { StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Text } from 'react-native-paper';

const CurrencySelect =({ selectedCurrency, onCurrencyChange}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        const currencies = ['USD', 'EUR', 'GBP'];
        const currentIndex = currencies.indexOf(selectedCurrency);
        const nextIndex = (currentIndex + 1) % currencies.length;
        onCurrencyChange(currencies[nextIndex]);
      }}
      style={styles.container}
    >
      <Text style={styles.text}>{selectedCurrency}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CurrencySelect;