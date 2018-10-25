import {
    ADDING_FRIEND,
    ADD_FRIEND_SUCCESS,
    ADD_FRIEND_ERROR,
} from '../actions/index'
import { initialState } from './friendsReducer'

export const addFriendReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDING_FRIEND:
            return {
                ...state,
                savingFriends: true,
                friendsSaved: false,
            }
        case ADD_FRIEND_SUCCESS:
            return {
                ...state,
                friends: [action.payload],
                savingFriends: false,
                friendsSaved: true,
            }
        case ADD_FRIEND_ERROR:
            return {
                ...state,
                savingFriends: false,
                friendsSaved: false,
            }
        default:
            return state
    }
}
