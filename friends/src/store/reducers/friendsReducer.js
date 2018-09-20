import {
    FETCHING_FRIENDS_START,
    FETCHING_FRIENDS_SUCCESS,
    FETCHING_FRIENDS_FAILURE,

    ADD_FRIEND_START,
    ADD_FRIEND_SUCCESS,
    ADD_FRIEND_FAILURE,

    REMOVE_FRIEND_START,
    REMOVE_FRIEND_SUCCESS,
    REMOVE_FRIEND_FAILURE,
} from '../actions';

// The initial state
const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    addingFriend: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    error: null
};

// The reducer
export const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_FRIENDS_START:
            return { ...state, fetchingFriends: true };
        case FETCHING_FRIENDS_SUCCESS:
            return { ...state, fetchingFriends: false, friends: action.payload };
        case FETCHING_FRIENDS_FAILURE:
            return { ...state, fetchingFriends: false, error: action.payload };
        case ADD_FRIEND_START:
            return { ...state, addingFriend: true };
        case ADD_FRIEND_SUCCESS:
            return { ...state, addingFriend: false, friends: action.payload };
        case ADD_FRIEND_FAILURE:
            return { ...state, addingFriend: false, error: action.payload };
        case REMOVE_FRIEND_START:
            return { ...state, deletingFriend: true };
        case REMOVE_FRIEND_SUCCESS:
            return { ...state, deletingFriend: false, friends: action.payload };
        case REMOVE_FRIEND_FAILURE:
            return { ...state, deletingFriend: false, error: action.payload };
        default:
            return state;
    }
}