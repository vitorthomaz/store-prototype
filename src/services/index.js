import axios from 'axios';

const ZE_URL = 'https://api.code-challenge.ze.delivery/public';
const GEO_URL = `https://api.opencagedata.com/geocode/v1/json`;

export const zeGraph = axios.create({
  baseURL: ZE_URL,
  timeout: 10000
});

export const geo = axios.create({
  baseURL: GEO_URL,
  timeout: 10000
});
