import { combineReducers } from 'redux';
import {friendsReducer} from './FriendsReducer'; 
import {singleFriendReducer} from './SingleFriendReducer'; 

export default combineReducers({
    friendsReducer,
    singleFriendReducer
})