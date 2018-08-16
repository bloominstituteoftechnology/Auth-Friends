import { combineReducers } from 'redux';
import { friendsReducer } from './friendsReducer';
import { addFriendReducer } from './addFriendReducer'

export default combineReducers({
  friendsReducer, addFriendReducer
});