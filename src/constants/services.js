/**
 * * This Api Key was purposely placed here to avoid any
 * * complication with the test. In the real world, I would
 * * place this kind ofsensitive data in a .env file and
 * * add it to .gitignore.
 */
export const API_KEY = 'd988bbeede394730b970e9a18457512b';

export const GEO_EMPTY = { empty: 'This address does not exists.' };
export const GEO_VALIDATION_ERROR = {
  error: 'Invalid format on Geocoding request.'
};
export const GEO_REQUEST_ERROR = { error: 'convertToGeo request failed!' };

export const POC_EMPTY = { empty: 'There is no poc for this address.' };
export const POC_VALIDATION_ERROR = {
  error: 'Invalid format on PoC request.'
};
export const POC_REQUEST_ERROR = { error: 'getPocId request failed!' };

export const PRODUCT_EMPTY = { empty: 'There is no product for this POC.' };
export const PRODUCT_VALIDATION_ERROR = {
  error: 'Invalid parameters on Product request.'
};
export const PRODUCT_REQUEST_ERROR = { error: 'getProducts request failed!' };
