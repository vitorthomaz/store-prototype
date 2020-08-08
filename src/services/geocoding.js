import { geo } from '../services';

import { formatAddress } from '../utils';
import {
  GEO_EMPTY,
  GEO_REQUEST_ERROR,
  GEO_VALIDATION_ERROR,
  API_KEY
} from '../constants/services';

export const convertToGeo = async (address = '') => {
  if (typeof address !== 'string') {
    console.log('Method convertToGeo was called with invalid params.');
    return GEO_VALIDATION_ERROR;
  }

  const normalized = formatAddress(address);

  const params = {
    q: normalized,
    key: API_KEY
  };

  try {
    const { data } = await geo.get('', { params });
    const results = data.results;

    if (results.length < 1) return GEO_EMPTY;

    return results[0];
  } catch (err) {
    console.log(err);

    return GEO_REQUEST_ERROR;
  }
};
