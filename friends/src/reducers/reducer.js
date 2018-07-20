import * as actionTypes from '../actions';

const initialState = {
    fetchingFriends: false,
    savingFriend: false,
    updatingFriend: false,
    deletingFriend: false,
    friends: [],
    error: null
}

export const friendReducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.FETCHING_FRIENDS:
        return { ...state, fetchingFriends: true };
      case actionTypes.FRIENDS_FETCHED:
        return { ...state, friends: action.payload, fetchingFriends: false };
      case actionTypes.UPDATING_FRIEND:
        return { ...state, updatingFriend: true };
      case actionTypes.UPDATED_FRIEND:
        return { ...state, friends: action.payload, updatingFriend: false };
      case actionTypes.DELETING_FRIEND:
        return { ...state, deletingFriend: true };
      case actionTypes.DELETED_FRIEND:
        return { ...state, friends: action.payload, deletingFriend: false };
      case actionTypes.SAVING_FRIEND:
        return { ...state, savingFriend: true };
      case actionTypes.SAVED_FRIEND:
        return { ...state, friends: action.payload, savingFriend: false };
      case actionTypes.ERROR:
        return {...state, fetchingFriends: false, savingFriend: false,
        deletingFriend: false, updatingFriend: false, error: action.payload
        };
        default:
            return state;
    }
};