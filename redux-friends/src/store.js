import { createStore, applyMiddleware, compose } from 'redux';
import { friendReducer } from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  friendReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

export default store;
