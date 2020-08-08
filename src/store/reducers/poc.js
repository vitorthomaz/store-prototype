import { SET_POC } from '../actions/poc';

const initialState = '';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POC:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
