import { FETCHED, FETCHING, GET_FRIENDS_ERROR,
    POSTED, POSTING, POST_FRIEND_ERROR,
    DELETED, DELETING, DELETE_FRIEND_ERROR } from "../actions";

// create initial state
const initialState = {
    fetchFriends: false,
    postingFriend: false,
    deletingFriend: false,
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
            return { ...state, postingFriend: false, error: null };

        case DELETING:
            return { ...state, deletingFriend: true };
        case DELETE_FRIEND_ERROR:
            return { ...state, error: action.errorMessage };
        case DELETED:
            return { ...state, friends: action.friends, deletingFriend: false, error: null };

        default:
            return state;
    }
};