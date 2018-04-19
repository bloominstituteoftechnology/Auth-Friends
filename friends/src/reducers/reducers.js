import * as actionTypes from '../actions/actions';

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    deletingFriend: false,
    friends: [],
    error: null,
};

export const rootReducer = (state = initialState, action) => {
    console.log('The reducer ran ${action.type}');
    switch (action.type) {
        case actionTypes.GETTING_FRIENDS:
            return { ...state, fetchingFriends: true };
        case actionTypes.FRIENDS_RECEIVED:
            return {
                ...state,
                friendsFetched: true,
                fetchingFriends: false,
                friends: action.payload,
            };
        case actionTypes.ERROR_GETTING_FRIENDS:
            return console.log(action.error);
        case actionTypes.CREATE_FRIEND:
            return {
                ...state,
                savingFriends: true,
                friendsFetched: false,
                fetchingFriends: true,
            };
        case actionTypes.FRIEND_CREATED:
            return {
                ...state,
                friendsSaved: true,
                fetchingFriends: false,
                friends: action.payload,
                savingFriends: false,
            };
        case actionTypes.ERROR_CREATING_FRIEND:
            return state;
        case actionTypes.DELETE_FRIEND:
            return state;
        case actionTypes.ERROR_DELETING_FRIEND:
            return state;
        case actionTypes.UPDATE_FRIEND:
            return { ...state, updatingFriend: true };
        case actionTypes.ERROR_UPDATING_FRIEND:
            return state;
        default:
            return state;
    }
};