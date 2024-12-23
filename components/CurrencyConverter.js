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
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('LKR');
  const [exchangeRate, setExchangeRate] = useState(null);
  const [error, setError] = useState('');
  const [pickerVisible, setPickerVisible] = useState(false);
  const [isFromCurrency, setIsFromCurrency] = useState(true);

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

  const handleCurrencySelect = (currency) => {
    if (isFromCurrency) {
      setFromCurrency(currency);
    } else {
      setToCurrency(currency);
    }
    setPickerVisible(false);
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Currency Converter</Title>
      <CurrencyInput
        amount={fromAmount}
        currency={fromCurrency}
        onAmountChange={handleFromAmountChange}
        onCurrencyChange={() => {
          setIsFromCurrency(true);
          setPickerVisible(true);
        }}
      />
      <Button mode="contained" onPress={handleDirectionChange}>
        Swap
      </Button>
      <CurrencyInput
        amount={toAmount}
        currency={toCurrency}
        onAmountChange={handleToAmountChange}
        onCurrencyChange={() => {
          setIsFromCurrency(false);
          setPickerVisible(true);
        }}
      />
      {error ? <ErrorMessage error={error} onDismiss={() => setError('')} /> : null}
      <CurrencyPicker
        visible={pickerVisible}
        onDismiss={() => setPickerVisible(false)}
        onSelect={handleCurrencySelect}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default CurrencyConverter;