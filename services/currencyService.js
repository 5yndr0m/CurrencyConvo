export default async function fetchExchangeRates(baseCurrency = 'USD') {
  try {
    //API key goes here
    const response = await fetch(
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