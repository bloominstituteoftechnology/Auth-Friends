import { combineReducers } from 'redux';
import { rootReducer } from './rootReducer';
import { friendsReducer } from './friendsReducer';

export const reducer = combineReducers({
  root: rootReducer,
  friendsReducer
});
