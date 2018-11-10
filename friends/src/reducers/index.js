import { combineReducers } from 'redux';
import { friendsReducer } from './friendReducers';
import { singleFriendReducer } from './singleFriendReducer';

export default combineReducers({
    friendsReducer,
    singleFriendReducer
});