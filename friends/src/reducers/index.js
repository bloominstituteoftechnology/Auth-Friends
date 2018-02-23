import { combineReducers } from 'redux';
import addFriendsReducer from './addFriendsReducer';
import loadFriendsReducer from './loadFriendsReducer';

export default combineReducers({
  addFriendsReducer,
  loadFriendsReducer,
});