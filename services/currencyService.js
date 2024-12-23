// services/currencyService.js
const mockRates = {
  USD: 1.0,
  EUR: 0.85,
  GBP: 0.75,
  INR: 74.0,
  AUD: 1.3,
  CAD: 1.25,
  SGD: 1.35,
  JPY: 110.0,
  CNY: 6.45,
  HKD: 7.8,
  NZD: 1.4,
  ZAR: 14.5,
  BRL: 5.2,
  RUB: 73.0,
  MXN: 20.0,
  SEK: 8.5,
  NOK: 8.6,
  DKK: 6.3,
  CHF: 0.92,
  LKR: 200.0,
};

const fetchExchangeRates = async (baseCurrency) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockRates);
    }, 500);
  });
};

export default fetchExchangeRates;