import {FETCHING, FETCHED, ERROR} from '../actions';

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    error: null
}

export const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING:
        return Object.assign({}, state, {fetchingFriends: true});

        case FETCHED:
        return Object.assign({}, state, {
            friends: action.payload,
            fetchingFriends: false,
            friendsFetched: true
        });

        case ERROR:
        return Object.assign({}, state, {
            error: action.payload,
            fetchingFriends: false,
            savingFriends: false,
            updatingFriends: false,
            deletingFriends: false
        });
        default: 
        return state;
    }
}