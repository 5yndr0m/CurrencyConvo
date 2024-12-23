// components/CurrencyConverter.js
import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Button } from 'react-native-paper';
import fetchExchangeRates from '../services/currencyService';
import CurrencyInput from './CurrencyInput';
import CurrencyPicker from './CurrencyPicker';
import ErrorMessage from './ErrorMessage';

const CurrencyConverter = () => {
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState(DEFAULT_FROM_CURRENCY);
  const [toCurrency, setToCurrency] = useState(DEFAULT_TO_CURRENCY);
  const [exchangeRate, setExchangeRate] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const getExchangeRate = async () => {
      try {
        const rates = await fetchExchangeRates(fromCurrency);
        setExchangeRate(rates[toCurrency]);
      } catch (err) {
        setError('Failed to fetch exchange rate');
      }
    };
    getExchangeRate();
  }, [fromCurrency, toCurrency]);

  const handleFromAmountChange = (value) => {
    setFromAmount(value);
    const numericValue = parseFloat(value) || 0;
    setToAmount((numericValue * exchangeRate).toFixed(2));
  };

  const handleToAmountChange = (value) => {
    setToAmount(value);
    const numericValue = parseFloat(value) || 0;
    setFromAmount((numericValue / exchangeRate).toFixed(2));
  };

  const handleDirectionChange = () => {
    const tempCurrency = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(tempCurrency);

    const tempAmount = fromAmount;
    setFromAmount(toAmount);
    setToAmount(tempAmount);
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Currency Converter</Title>
      <View style={styles.converterContainer}>
        <TextInput
          mode="outlined"
          label="Amount"
          value={fromAmount}
          onChangeText={handleFromAmountChange}
          keyboardType="numeric"
          style={styles.input}
        />
        <Text style={styles.currency}>{fromCurrency}</Text>
        <Button mode="contained" onPress={handleDirectionChange}>
          Swap
        </Button>
        <TextInput
          mode="outlined"
          label="Converted Amount"
          value={toAmount}
          onChangeText={handleToAmountChange}
          keyboardType="numeric"
          style={styles.input}
        />
        <Text style={styles.currency}>{toCurrency}</Text>
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  converterContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 20,
  },
  input: {
    width: '80%',
    marginBottom: 20,
  },
  currency: {
    marginBottom: 20,
    fontSize: 18,
  },
  error: {
    color: 'red',
  },
});

export default CurrencyConverter;