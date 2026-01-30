import React, { createContext, useContext, useState, useEffect } from 'react';

// Currency conversion rates (USD to other currencies)
// These should be updated periodically or fetched from an API
const CONVERSION_RATES = {
  NGN: 1400, // 1 USD = 1400 NGN (approximate, should be updated regularly)
};

// Country to currency mapping
const COUNTRY_CURRENCY_MAP = {
  NG: 'NGN',
  US: 'USD',
  GB: 'GBP',
  EU: 'EUR',
  CA: 'CAD',
  AU: 'AUD',
};

const CurrencyContext = createContext();

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};

export const CurrencyProvider = ({ children }) => {
  const [country, setCountry] = useState('US'); // Default to US
  const [currency, setCurrency] = useState('USD');
  const [isLoading, setIsLoading] = useState(true);

  // Detect country based on IP using ipwho.is
  const detectCountry = async () => {
    try {
      const response = await fetch('https://ipwho.is/');
      if (response.ok) {
        const data = await response.json();
        if (data.success && data.country_code) {
          console.log('Detected country:', data.country_code);
          return data.country_code.toUpperCase();
        }
      }
    } catch (error) {
      console.warn('Country detection failed:', error);
    }
    
    // Fallback to US if detection fails
    return 'US';
  };

  // Initialize country detection
  useEffect(() => {
    const initializeCurrency = async () => {
      setIsLoading(true);
      
      // Check if country is stored in localStorage
      const storedCountry = localStorage.getItem('detected_country');
      if (storedCountry) {
        setCountry(storedCountry);
        setCurrency(COUNTRY_CURRENCY_MAP[storedCountry] || 'USD');
        setIsLoading(false);
        return;
      }

      // Detect country
      const detectedCountry = await detectCountry();
      setCountry(detectedCountry);
      
      const detectedCurrency = COUNTRY_CURRENCY_MAP[detectedCountry] || 'USD';
      setCurrency(detectedCurrency);
      
      // Store in localStorage
      localStorage.setItem('detected_country', detectedCountry);
      
      setIsLoading(false);
    };

    initializeCurrency();
  }, []);

  // Convert price from USD to target currency
  const convertPrice = (priceInUSD) => {
    if (currency === 'USD') return priceInUSD;
    
    const rate = CONVERSION_RATES[currency];
    if (!rate) return priceInUSD;
    
    return priceInUSD * rate;
  };

  // Format price with appropriate currency symbol
  const formatPrice = (priceInUSD, options = {}) => {
    const convertedPrice = convertPrice(priceInUSD);
    
    switch (currency) {
      case 'NGN':
        return `₦${convertedPrice.toLocaleString('en-NG', { 
          minimumFractionDigits: 0,
          maximumFractionDigits: 0 
        })}`;
      case 'USD':
      default:
        return `$${convertedPrice.toLocaleString('en-US', { 
          minimumFractionDigits: priceInUSD % 1 !== 0 ? 2 : 0,
          maximumFractionDigits: 2 
        })}`;
    }
  };

  // Get currency symbol
  const getCurrencySymbol = () => {
    switch (currency) {
      case 'NGN': return '₦';
      case 'USD': 
      default: return '$';
    }
  };

  const value = {
    country,
    currency,
    isLoading,
    convertPrice,
    formatPrice,
    getCurrencySymbol,
    setCurrency: (newCurrency) => {
      setCurrency(newCurrency);
      localStorage.setItem('preferred_currency', newCurrency);
    }
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};
