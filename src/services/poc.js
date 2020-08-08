import { zeGraph } from '../services';

import {
  POC_EMPTY,
  POC_REQUEST_ERROR,
  POC_VALIDATION_ERROR
} from '../constants/services';

const query = {
  getPocId: `
    query pocSearch( $lat: String!, $long: String!, $algorithm: String!, $now: DateTime!) {
      pocSearch(lat: $lat, long: $long, algorithm: $algorithm, now: $now) {
        id
      }
    }  
  `
};

export const getPocId = async (
  numberLat = 0.0,
  numberLong = 0.0,
  algorithm = 'NEAREST',
  now = new Date().toISOString()
) => {
  if (typeof algorithm !== 'string' || typeof now !== 'string') {
    console.log('Method getPocId was called with invalid params.');
    return POC_VALIDATION_ERROR;
  }

  const lat = numberLat.toString();
  const long = numberLong.toString();

  const data = {
    query: query.getPocId,
    variables: { lat, long, algorithm, now }
  };

  try {
    const result = await zeGraph.post('graphql', data);
    const poc = result.data.data.pocSearch;

    if (poc.length < 1) return POC_EMPTY;

    return poc[0];
  } catch (err) {
    console.log(err);
    return POC_REQUEST_ERROR;
  }
};
