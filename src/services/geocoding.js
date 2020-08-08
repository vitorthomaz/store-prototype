import axios from 'axios';

import { formatAddress } from '../utils';

/**
 * * This Api Key was purposely placed here to avoid any
 * * complication with the test. In the real world, I would
 * * place this sensitive data in a .env file and add it to
 * * .gitignore.
 */
const API_KEY = 'd988bbeede394730b970e9a18457512b';
const OUTPUT_FORMAT = 'json';
const API_URL = `https://api.opencagedata.com/geocode/v1/${OUTPUT_FORMAT}`;

export const convertToGeo = async (address = '') => {
  if (typeof address !== 'string')
    return { error: 'Invalid format. Please provide a string.' };

  const normalized = formatAddress(address);
  const params = {
    q: normalized,
    key: API_KEY
  };

  try {
    const geo = await axios.get(API_URL, { params });

    const results = geo.data.results[0];
    if (results) return results;
  } catch (err) {
    console.log(err);

    return { error: 'Something went wrong!' };
  }

  return { empty: 'This address does not exists.' };
};
