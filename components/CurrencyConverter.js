import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import CurrencyInput from './CurrencyInput';
import DirectionArrow from './DirectionArrow';

const CurrencyConverter = () => {
  
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [isReversed, setIsReversed] = useState(false);
 
  // Mock conversion rates
  const rates = {
    USD: { EUR: 0.85, GBP: 0.73 },
    EUR: { USD: 1.18, GBP: 0.86 },
    GBP: { USD: 1.37, EUR: 1.16 }
  };
 
  const handleFromAmountChange = (value) => {
    setFromAmount(value);
    const numericValue = parseFloat(value) || 0;
    const rate = isReversed ? rates[toCurrency][fromCurrency] : rates[fromCurrency][toCurrency];
    setToAmount((numericValue * rate).toFixed(2));
  };
 
  const handleToAmountChange = (value) => {
    setToAmount(value);
    const numericValue = parseFloat(value) || 0;
    const rate = isReversed ? rates[toCurrency][fromCurrency] : rates[fromCurrency][toCurrency];
    setFromAmount((numericValue / rate).toFixed(2));
  };
 
  const handleDirectionChange = () => {
    setIsReversed(!isReversed);
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
            <CurrencyInput
              amount={fromAmount}
              currency={fromCurrency}
              onAmountChange={handleFromAmountChange}
              onCurrencyChange={setFromCurrency}
            />
    
            <DirectionArrow 
              isReversed={isReversed}
              onPress={handleDirectionChange}
            />
    
            <CurrencyInput
              amount={toAmount}
              currency={toCurrency}
              onAmountChange={handleToAmountChange}
              onCurrencyChange={setToCurrency}
            />
          </View>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    marginBottom: 40,
  },
  converterContainer: {
    alignItems: 'center',
    gap: 20,
  },
});

export default CurrencyConverter;