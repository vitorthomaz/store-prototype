export const formatAddress = address => {
  const normalized = address
    .normalize('NFD')
    .replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '');

  return normalized;
};
