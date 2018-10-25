import { combineReducers } from 'redux'
import { friendsReducer } from './friendsReducer'
import { addFriendReducer } from './addFriendReducer'
import { deleteFriendReducer } from './deleteFriendReducer'
import { updateFriendReducer } from './updateFriendReducer'

export const rootReducer = combineReducers({
    friendsReducer,
    addFriendReducer,
    deleteFriendReducer,
    updateFriendReducer,
})
