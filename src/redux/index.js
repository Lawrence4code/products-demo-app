import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import productsReducer from './products/products.reducer';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
});

const middlewares = [thunk];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
