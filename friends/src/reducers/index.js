import { FETCHING, FETCH_SUCCESS, FETCH_ERROR } from "../actions";

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    updatingFriend: false,
    deletingFriend: false,
    friends: [],
    error: null
};

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING:
            return {
                ...state,
                fetchingFriends: true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                fetchingFriends: false,
                friends: action.payload
            }
        case FETCH_ERROR:
            return {
                ...state,
                fetchingFriends: false,
                error: action.payload
            }
        default:
            return state;
    }
};