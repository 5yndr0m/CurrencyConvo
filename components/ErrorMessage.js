// components/ErrorMessage.js
import React from 'react';
import { Snackbar } from 'react-native-paper';

export default function ErrorMessage({ error, onDismiss }) {
  return (
    <Snackbar
      visible={!!error}
      onDismiss={onDismiss}
      duration={Snackbar.DURATION_SHORT}
    >
      {error}
    </Snackbar>
  );
}