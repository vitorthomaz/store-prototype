import { SET_POC } from '../actions/poc';

export const initialState = '532';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POC:
      return action.payload.poc;
    default:
      return state;
  }
};

export default reducer;
