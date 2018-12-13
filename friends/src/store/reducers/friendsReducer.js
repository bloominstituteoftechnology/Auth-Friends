import {
    FETCH_FRIEND_START,
    FETCH_FRIEND_SUCCESS,
    FETCH_FRIEND_FAILURE
} from "../actions";

const initState = {
    friends: [],
    error: null,
    fetching: false
};

export const friendsReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_FRIEND_START:
            return {
                ...state,
                fetching: true
            };
        case FETCH_FRIEND_SUCCESS:
            return {
                ...state,
                error: null,
                fetching: false,
                friends: action.payload
            };
        case FETCH_FRIEND_FAILURE:
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        default:
            return state;
    }
};