import * as actionTypes from '../actions';

const initialState = {
    friends: [],
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    error: null
};

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCHING_FRIENDS: {
            return {...state, fetchingFriends: true}
        }
        case actionTypes.FRIENDS_FETCHED: {
            return {...state, friends: action.payload, fetchingFriends: false, friendsFetched: true}
        }
        case actionTypes.FRIENDS_SAVED: {
            return {...state, friends: action.payload, savingFriends: false, friendsSaved: true}
        }
        case actionTypes.SAVING_FRIENDS: {
            return {...state, savingFriends: true}
        }
        case actionTypes.UPDATING_FRIENDS: {
            return {...state, updatingFriend: true}
        }
        case actionTypes.FRIENDS_UPDATED: {
            return {...state, friends: action.payload, updatingFriend: false, friendUpdated: true}
        }
        case actionTypes.DELETING_FRIENDS: {
            return {...state, deletingFriend: true}
        }
        case actionTypes.FRIENDS_DELETED: {
            return {...state, friends: action.payload, deletingFriend: false, friendDeleted: true}
        }
        case actionTypes.ERROR:
            return {
                ...state,
                fetchingFriends: false,
                savingFriends: false,
                updatingFriend: false,
                deletingFriend: false,
                error: action.payload
        };
        default:
            return state;
    }
};