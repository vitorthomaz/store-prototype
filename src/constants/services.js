/**
 * * This Api Key was purposely placed here to avoid any
 * * complication with the test. In the real world, I would
 * * have placed this kind of sensitive data in a .env file
 * * and add it to .gitignore
 */
export const API_KEY = 'd988bbeede394730b970e9a18457512b';

export const GEO_EMPTY = { error: 'Este endereço não existe' };
export const GEO_VALIDATION_ERROR = {
  error: 'Invalid format on Geocoding request.'
};
export const GEO_REQUEST_ERROR = {
  error:
    'Houve um problema!  Verifique sua conexão com a internet e tente novamente'
};

export const POC_EMPTY = { error: 'Não há distribuidor para este endereço' };
export const POC_VALIDATION_ERROR = {
  error: 'Invalid format on PoC request.'
};
export const POC_REQUEST_ERROR = {
  error:
    'Houve um problema! Verifique sua conexão com a internet e tente novamente'
};

export const PRODUCT_EMPTY = { empty: 'Não há produtos neste distribuidor' };
export const PRODUCT_VALIDATION_ERROR = {
  error: 'Invalid parameters on Product request.'
};
export const PRODUCT_REQUEST_ERROR = {
  error:
    'Houve um problema! Verifique sua conexão com a internet e tente novamente'
};
