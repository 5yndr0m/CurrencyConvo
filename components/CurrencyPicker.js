// components/CurrencyPicker.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Menu, Button } from 'react-native-paper';

const currencies = [
  'USD', 'EUR', 'GBP', 'INR', 'AUD', 'CAD', 'SGD', 'JPY', 'CNY', 'HKD', 
  'NZD', 'ZAR', 'BRL', 'RUB', 'MXN', 'SEK', 'NOK', 'DKK', 'CHF', 'LKR'
];

const CurrencyPicker = ({ visible, onDismiss, onSelect }) => {
  return (
    <Menu
      visible={visible}
      onDismiss={onDismiss}
      anchor={<Button onPress={onDismiss}>Select Currency</Button>}
    >
      {currencies.map((currency) => (
        <Menu.Item key={currency} onPress={() => onSelect(currency)} title={currency} />
      ))}
    </Menu>
  );
};

const styles = StyleSheet.create({});

export default CurrencyPicker;