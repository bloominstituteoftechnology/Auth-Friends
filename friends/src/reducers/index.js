import { combineReducers } from 'redux';
import { friendsReducer } from './friendsReducer';

export const rootReducer = combineReducers({
  friends: friendsReducer
});
