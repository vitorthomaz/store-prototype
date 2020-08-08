import axios from 'axios';

export const zeGraph = axios.create({
  baseURL: 'https://api.code-challenge.ze.delivery/public',
  timeout: 10000
});
