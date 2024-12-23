import AsyncStorage from '@react-native-async-storage/async-storage';

export const setApiKey = async (key) => {
  await AsyncStorage.setItem('apiKey', key);
};

export const getApiKey = async () => {
  return await AsyncStorage.getItem('apiKey');
};