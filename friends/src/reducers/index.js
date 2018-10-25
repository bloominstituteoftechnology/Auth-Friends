import { combineReducers } from 'redux';
import {friendsReducer} from './FriendsReducer'; 
import {singleFriendReducer} from './FriendsReducer'; 

export default combineReducers({
    friendsReducer,
    singleFriendReducer
})