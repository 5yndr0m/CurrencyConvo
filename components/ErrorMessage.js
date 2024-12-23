import React from 'react';
import { Snackbar } from 'react-native-paper';

export default function ErrorMessage({ error, onDismiss, onRetry }) {
  return (
    <Snackbar
      visible={!!error}
      onDismiss={onDismiss}
      action={onRetry ? {
        label: 'Retry',
        onPress: onRetry,
      } : undefined}
    >
      {error}
    </Snackbar>
  );
}