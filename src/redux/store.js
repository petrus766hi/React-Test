import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

import cartItems from './reducer/cartItem';

const redecers = combineReducers({
  cartItems: cartItems,
});

const store = createStore(
  redecers,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

export default store;
