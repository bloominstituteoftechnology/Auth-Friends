import { FETCHING, FETCHED, ADDING, ADDED, UPDATING, UPDATED, DELETING, DELETED, ERROR } from '../Actions/Index.js';

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
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING:
            return {...state, fetchingFriends: true };
        case FETCHED:
            return {...state, friends: action.friends, fetchingFriends: false, error: null}
        case ADDING:
            return {...state, savingFriends: true};
        case ADDED:
            return {...state, friends: action.friends, savingFriends: false, error: null};
        case UPDATING:
            return {...state, updatingFriends: true};
        case UPDATED:
            return {...state, friends: action.friends, updatingFriends: false, error: null};
        case DELETING:
            return {...state, deletingFriends: true};
        case DELETED:
            return {...state, friends: action.friends, deletingFriends: false, error: null};
        case ERROR:
            return {...state, error: action.errorMessage};
        default:
            return state;
    }
};