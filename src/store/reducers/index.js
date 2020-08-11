import { combineReducers } from 'redux';

import poc, { initialState as pocState } from './poc';
import shopping, { initialState as shoppingState } from './shopping';

export { pocState, shoppingState };

export default combineReducers({ poc, shopping });
