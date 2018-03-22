import { FETCHED, FETCHING, ERROR } from "../actions";

// create initial state
const initialState = {
    fetchFriends: false,
    friends: [],
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING:
            return { ...state, fetchFriends: true };
        case ERROR:
            return { ...state, error: action.errorMessage };
        case FETCHED:
            return { ...state, friends: action.friends, fetchFriends: false, error: null };
        default:
            return state;
    }
};