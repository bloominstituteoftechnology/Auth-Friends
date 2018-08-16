import {combineReducer} from 'redux'; 
import {friendReducer} from './friendsReducer'; 
import {singleFriendReducer} from './singleFriendReducer'; 

export default combineReducer({
    friendReducer,
    singleFriendReducer
}); 