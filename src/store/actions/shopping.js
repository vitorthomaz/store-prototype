export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addProduct = (id, title, price) => ({
  type: ADD_TO_CART,
  payload: { id, title, price }
});

export const removeProduct = id => ({
  type: REMOVE_FROM_CART,
  payload: { id }
});
