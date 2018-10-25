import { combineReducers } from 'redux'
import { friendsReducer } from './friendsReducer'
import { addFriendReducer } from './addFriendReducer'
import { deleteFriendReducer } from './deleteFriendReducer'

export const rootReducer = combineReducers({
    friendsReducer,
    addFriendReducer,
    deleteFriendReducer,
})
