import {
    FETCHING,
    UPDATING_SUCCESS,
    UPDATING_FAILURE
  } from '../actions/';
  
  const initialState = {
    fetching: false,
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

export const addFriendReducer = (state = initialState, action) => {

    switch (action.type) {
  
      case FETCHING:
        return { ...state, fetching: true };


        case UPDATING_SUCCESS:
        return { ...state, fetching: false, friends : [...action.payload] };

        case UPDATING_FAILURE:
        return { ...state, fetching: false, error : action.payload };

        default:
        return state;
    }
  };