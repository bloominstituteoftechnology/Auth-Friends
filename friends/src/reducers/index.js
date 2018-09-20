import { FETCHING, FETCHED, ERROR, FRIEND_ADDED } from '../actions';

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendAdded: false,
    addingFriend: false,
    friends: [],
    error: null
};

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING:
            return Object.assign({}, state,
                {
                    fetchingFriends: true
                });
        case FETCHED:
            return Object.assign({}, state, {
                friends: action.payload,
                fetchingFriends: false,
                friendsFetched: true
            });
        case FRIEND_ADDED:
            return Object.assign({}, state,
                {
                    friends: [...state.friends, action.payload],
                    friendAdded: true,
                });
        case ERROR:
            return Object.assign({}, state, {
                fetchingFriends: false,
                error: action.payload
            });
        default:
            return state;
    }
};
