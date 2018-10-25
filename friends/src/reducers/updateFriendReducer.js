import {
    UPDATE_FRIEND,
    UPDATE_FRIEND_SUCCESS,
    UPDATE_FRIEND_ERROR,
} from '../actions/index'
import { initialState } from './friendsReducer'

export const updateFriendReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FRIEND:
            return {
                ...state,
                savingFriends: true,
                friendsSaved: false,
            }
        case UPDATE_FRIEND_SUCCESS:
            return {
                ...state,
                friends: [action.payload],
                savingFriends: false,
                friendsSaved: true,
            }
        case UPDATE_FRIEND_ERROR:
            return {
                ...state,
                savingFriends: false,
                friendsSaved: false,
            }
        default:
            return state
    }
}
