import {friendsReducer} from './friendsReducer';
import {newFriendReducer} from './newFriendReducer';
import {combineReducers } from 'redux';

export default combineReducers({
  friendsReducer, newFriendReducer
});
