import { combineReducers } from 'redux';
import { friendsReducer, newFriendReducer } from './friendsReducer';
import { deleteFriendReducer } from './updateReducer';

export const rootReducer = combineReducers({
    friends: friendsReducer,
    deleteFriendReducer,
    newFriendReducer
})