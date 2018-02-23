import { combineReducers } from 'redux';
import addFriendsReducer from './addFriendsReducer';
import loadFriendsReducer from './loadFriendsReducer';
import updateFriendReducer from './updateFriendReducer';
import removeFriendReducer from './removeFriendReducer';

export default combineReducers({
  addFriendsReducer,
  loadFriendsReducer,
  updateFriendReducer,
  removeFriendReducer,
});