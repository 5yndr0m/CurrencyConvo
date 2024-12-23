import React, { useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { Card, Searchbar, List } from 'react-native-paper';
import { CURRENCIES } from '../constants/currencies';

export default function CurrencySelect({ visible, onDismiss, onSelect, selectedCurrency }) {
  const [searchQuery, setSearchQuery] = useState('');

  if (!visible) return null;

  const filteredCurrencies = Object.entries(CURRENCIES).filter(([code, currency]) =>
    code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    currency.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.overlay}>
      <Card style={styles.container}>
        <Card.Content>
          <Searchbar
            placeholder="Search currencies"
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={styles.searchbar}
          />
          <FlatList
            data={filteredCurrencies}
            keyExtractor={([code]) => code}
            style={styles.list}
            renderItem={({ item: [code, currency] }) => (
              <List.Item
                title={`${currency.symbol} ${code}`}
                description={currency.name}
                onPress={() => {
                  onSelect(code);
                  onDismiss();
                }}
                right={props => 
                  selectedCurrency === code ? 
                  <List.Icon {...props} icon="check" /> : 
                  null
                }
              />
            )}
          />
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: 20,
  },
  container: {
    maxHeight: '80%',
  },
  searchbar: {
    marginBottom: 8,
  },
  list: {
    maxHeight: 400,
  },
});