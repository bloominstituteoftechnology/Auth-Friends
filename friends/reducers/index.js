import { combineReducers } from 'redux';
import { friendsReducer } from './friendsReducer';
import { FriendReducer } from './FriendReducer';

export default combineReducers({
  friendsReducer,
  FriendReducer
});