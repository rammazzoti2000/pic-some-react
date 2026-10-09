export const formatPrice = (amount: number): string =>
  amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
