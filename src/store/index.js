import { createStore } from 'redux';

import reducers from './reducers';

export const initialState = {
  poc: ''
};

export default createStore(reducers, initialState);
