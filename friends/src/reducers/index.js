import { combineReducers } from 'redux'
import { friendsReducer } from './friendsReducer'
import { addFriendReducer } from './addFriendReducer'

export const rootReducer = combineReducers({
    friendsReducer,
    addFriendReducer,
})
