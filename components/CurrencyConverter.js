// components/CurrencyConverter.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button, Divider } from 'react-native-paper';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [error, setError] = useState('');

  const convertCurrency = async () => {
    try {
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/USD`);
      const data = await response.json();
      const rate = data.rates.EUR; // Change EUR to the target currency
      setConvertedAmount((amount * rate).toFixed(2));
      setError('');
    } catch (err) {
      setError('Failed to fetch exchange rate');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Currency Converter</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter amount in USD"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <Button mode="contained" onPress={convertCurrency}>
        Convert to EUR
      </Button>
      <Divider style={styles.divider} />
      {convertedAmount !== null && (
        <Text style={styles.result}>Converted Amount: EUR {convertedAmount}</Text>
      )}
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  divider: {
    marginVertical: 20,
    width: '80%',
  },
  result: {
    fontSize: 18,
    marginBottom: 20,
  },
  error: {
    color: 'red',
  },
});

export default CurrencyConverter;