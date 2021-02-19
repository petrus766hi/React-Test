import {ADD_TO_CART, REMOVE_TO_CART, CLEAR_CART} from './constans';

const INITIAL_STATE = {
  cart: [],
};

const cartItems = (state = INITIAL_STATE.cart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_TO_CART:
      return state.filter((item, index) => item !== action.payload);
    case CLEAR_CART:
      return (state = []);
    default:
      return state;
  }
};

export default cartItems;
