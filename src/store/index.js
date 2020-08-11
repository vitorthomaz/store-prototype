import { createStore } from 'redux';

import reducers, { pocState, shoppingState } from './reducers';

export const initialState = {
  poc: pocState,
  shopping: shoppingState
};

export default createStore(reducers, initialState);
