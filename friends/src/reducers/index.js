import { ADD_FRIEND, ADD_SUCCESS, ADD_ERROR, FETCHING, FETCH_SUCCESS, FETCH_ERROR } from "../actions";

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    addingFriend: false,
    updatingFriend: false,
    deletingFriend: false,
    friends: [],
    error: null
};

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FRIEND:
            return {
                ...state,
                addingFriend: true
            }
        case ADD_SUCCESS:
            return {
                ...state,
                addingFriend: false,
                friends: action.payload
            }
        case ADD_ERROR:
            return {
                ...state,
                addingFriend: false,
                error: action.payload
            }
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