import { createStore } from 'redux';

import reducers from './reducers';

export const initialState = {
  poc: '532'
};

export default createStore(reducers, initialState);
