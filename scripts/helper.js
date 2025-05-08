export function formatPrice(number, currency) {
  return number.toLocaleString('en-US', {
    style: 'currency',
    currency: currency,
  });
}