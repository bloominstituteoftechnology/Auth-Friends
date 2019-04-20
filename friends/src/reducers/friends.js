import {FRIEND_ADD, FRIEND_GET_ALL, FRIEND_SUCCESS, FRIEND_FAIL, FRIEND_DELETE} from '../actions'

const initialState = {
    friends: [],
    fetching: false,
    error: null,
}

export const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FRIEND_GET_ALL:
            return {
                ...state,
                error: null,
                fetching: true,
            }
        case FRIEND_ADD:
            return {
                ...state,
                error: null,
                fetching: true,
                friends: action.payload,
            }
        case FRIEND_DELETE:
            return {
                ...state,
                error: null,
                fetching: true,
            }
        case FRIEND_SUCCESS:
            return {
                ...state,
                error: null,
                fetching: false,
                friends: action.payload,
            }
        case FRIEND_FAIL:
            return {
                ...state,
                error: action.payload,
                fetching: false,
            }
        default:
            return state
    }
}