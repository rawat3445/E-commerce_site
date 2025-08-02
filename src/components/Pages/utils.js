// src/components/utils.js
export const formatPrice = (price) => {
  // Convert paise to rupees and format as currency
  const rupees = price / 100;
  return rupees.toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  });
};

// Add other utility functions here if needed