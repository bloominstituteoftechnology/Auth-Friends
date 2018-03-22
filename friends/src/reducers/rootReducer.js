import { FETCHED, FETCHING, GET_FRIENDS_ERROR,
    POSTED, POSTING, POST_FRIEND_ERROR } from "../actions";

// create initial state
const initialState = {
    fetchFriends: false,
    postingFriend: false,
    friends: [],
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING:
            return { ...state, fetchFriends: true };
        case GET_FRIENDS_ERROR:
            return { ...state, error: action.errorMessage };
        case FETCHED:
            return { ...state, friends: action.friends, fetchFriends: false, error: null };
        case POSTING:
            return { ...state, postingFriend: true };
        case POST_FRIEND_ERROR:
            return { ...state, error: action.errorMessage };
        case POSTED:
            return { ...state, postingFriend: false };
        default:
            return state;
    }
};