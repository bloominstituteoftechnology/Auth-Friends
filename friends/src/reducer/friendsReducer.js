import {
    FETCHING,
    SUCCESS,
    FAILURE,
  } from '../actions';


let initialState = {
    isFetching: false,
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
      case FETCHING: 
        return {...state, isFetching: true};
      case SUCCESS:
        return {
          ...state,
          isFetching: false,
          friends: [...state.friends, ...action.payload]
        }
      case FAILURE:
        return {
          ...state,
          isFetching: false,
          error: action.payload
        };
  
      default:
        return state;
    }
  };
  