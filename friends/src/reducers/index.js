import * as actionTypes from '../actions';

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
    switch (action.type) {
        case actionTypes.FETCHING_FRIENDS:
            return {
                ...state,
                fetchingFriends: true
            }
        case actionTypes.FETCHED_FRIENDS:
            return {
                ...state,
                friendsFetched: true,
                fetchingFriends: false,
                friends: action.payload
            }
        case actionTypes.SAVING_FRIENDS:
            return {
                ...state,
                savingFriends: true
            }
        case actionTypes.SAVED_FRIENDS:
            return {
                ...state,
                savingFriends: false,
                friendsSaved: true,
                friends: action.payload
            }
        case actionTypes.UPDATING_FRIENDS:
            return {
                ...state,
                updatingFriend: true
            }
        case actionTypes.UPDATED_FRIENDS:
            return {
                ...state,
                friendUpdated: true,
                updatingFriend: false,
                friends: action.payload
            }
        case actionTypes.DELETING_FRIENDS:
            return {
                ...state,
                deletingFriend: true
            }
        case actionTypes.DELETED_FRIENDS:
            return {
                ...state,
                friendDeleted: true,
                deletingFriend: false,
                friends: action.payload
            }
        case actionTypes.ERROR:
            return {
                ...state,
                savingFriends: false,
                fetchingFriends: false,
                updatingFriend: false,
                deletingFriend: false,
                error: action.payload
            } 
        default:
            return state;
    }
}; 
