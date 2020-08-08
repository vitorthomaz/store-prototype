import { zeGraph } from '../services';

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
  const valids = checkIfString(algorithm, now);
  if (valids < 2) {
    console.log('getPocId was called with invalid params');
    return { error: 'Invalid getPocId request' };
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

    if (poc.length < 1) return { empty: 'There is no poc for the address' };

    return poc[0];
  } catch (err) {
    console.log(err);
    return { error: 'getPocId request failed.' };
  }
};

const checkIfString = (...args) => {
  const valid = args.filter(arg => typeof arg === 'string');

  if (valid.length === args.length) return args.length;

  return 0;
};
