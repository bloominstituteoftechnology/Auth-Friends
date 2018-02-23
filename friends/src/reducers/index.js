import { combineReducers } from 'redux';
import { getReducer, addReducer } from './reducers.js';

export const rootReducer = combineReducers({
  getReducer,
  addReducer,
});
