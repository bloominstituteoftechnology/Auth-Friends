import {
    DELETE_FRIEND,
    DELETE_FRIEND_SUCCESS,
    DELETE_FRIEND_ERROR,
} from '../actions/index'
import { initialState } from './friendsReducer'

export const deleteFriendReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_FRIEND:
            return {
                ...state,
                deletingFriends: true,
                friendDeleted: false,
            }
        case DELETE_FRIEND_SUCCESS:
            return {
                ...state,
                friends: [action.payload],
                deletingFriends: false,
                friendDeleted: true,
            }
        case DELETE_FRIEND_ERROR:
            return {
                ...state,
                deletingFriends: false,
                friendDeleted: false,
            }
        default:
            return state
    }
}
