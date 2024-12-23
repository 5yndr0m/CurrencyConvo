import { getApiKey } from '../stores/settingsStore';

export default async function fetchExchangeRates(baseCurrency = 'USD') {
  try {
    
    const apiKey = await getApiKey();
    
    if(!apiKey) {
      throw new Error('No API key found');
    }
    
    //API key goes here
    // 
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`
    );
    const data = await response.json();
    
    if (response.ok) {
      return data.conversion_rates;
    } else {
      throw new Error(data.error || 'Failed to fetch exchange rates');
    }
  } catch (error) {
    throw new Error('Network error: Could not fetch exchange rates');
  }
}