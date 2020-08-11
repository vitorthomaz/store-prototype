import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/shopping';

export const initialState = [];

const remove = (cart, id) => {
  const index = cart.findIndex(elem => elem.id === id);
  if (index === -1) return cart;

  const newState = [...cart];
  newState.splice(index, 1);
  return newState;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];

    case REMOVE_FROM_CART:
      return remove(state, action.payload.id);
    default:
      return state;
  }
};

export default reducer;
