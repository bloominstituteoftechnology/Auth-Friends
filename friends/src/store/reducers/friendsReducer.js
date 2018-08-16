import {
    ERROR,
    DATA_LOADED,
    LOADING_DATA,
} from '../actions/index';

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    // friendsSaved: false,
    // savingFriends: false,
    // updatingFriend: false,
    // friendUpdated: false,
    // deletingFriend: false,
    // friendDeleted: false,
    friends: [],
    error: null,
};

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_DATA:
            return Object.assign({}, state, {
                fetchingFriends: true,
            });
        
        case DATA_LOADED:
            return Object.assign({}, state, {
                fetchingFriends: false,
                friendsFetched: true,
                friends: action.payload,
            });
        
        case ERROR:
            return Object.assign({}, state, {
                fetchingFriends: false,
                friendsFetched: false,
                error: action.payload,
            });

        default:
            return state;
    }
};