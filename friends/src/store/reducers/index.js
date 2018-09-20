import { combineReducers } from 'redux';
import { friendsReducer } from './friendsReducer';
import { newFriendReducer } from './newFriendReducer';

export default combineReducers({
    friendsReducer,
    newFriendReducer,
});