import { combineReducers } from 'redux';
import { friendsReducer, newFriendReducer } from './friendsReducer';
import { deleteFriendReducer, updateFriendReducer } from './updateReducer';

export const rootReducer = combineReducers({
    friends: friendsReducer,
    deleteFriendReducer,
    newFriendReducer,
    updateFriendReducer,
})