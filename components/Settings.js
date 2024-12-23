import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card, IconButton, TextInput, Title } from 'react-native-paper';
import { setApiKey } from '../stores/settingsStore';
import ErrorMessage from './ErrorMessage';

export default function Settings({ onBack }) {
  const [key, setKey] = useState('');
  const [error, setError] = useState(null);

  const handleSave = async () => {
    try {
      await setApiKey(key);
      onBack();
    } catch (err) {
      setError('Failed to save API key');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton icon="arrow-left" onPress={onBack} />
        <Title>Settings</Title>
      </View>

      <Card style={styles.card}>
        <Card.Content>
          <TextInput
            label="ExchangeRate API Key"
            value={key}
            onChangeText={setKey}
            mode="outlined"
            style={styles.input}
          />
          <Button mode="contained" onPress={handleSave}>
            Save
          </Button>
        </Card.Content>
      </Card>

      <ErrorMessage 
        error={error} 
        onDismiss={() => setError(null)} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 8,
  },
  card: {
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
  },
});