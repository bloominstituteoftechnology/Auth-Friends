import { combineReducers } from 'redux';

import getFriendsReducer from './getFriendsReducer';
import addFriendReducer from './addFriendReducer';

// this is state
export default combineReducers({
  friendsReducer: getFriendsReducer,
  addFriend: addFriendReducer
});
