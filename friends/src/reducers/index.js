import {
    FETCH_FRIENDS_FAILURE,
    FETCH_FRIENDS_START,
    FETCH_FRIENDS_SUCCESS,
    ADD_FRIEND_START,
    ADD_FRIEND_SUCCESS,
    ADD_FRIEND_FAILURE
  } from '../actions';

// Array characters, Boolean fetching, null error.
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
// action types should be FETCHING, SUCCESS and FAILURE
// your switch statement should handle all of these cases.

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_FRIEND_START:
        return {
          ...state,
          fetchingFriends: true
        };
      case ADD_FRIEND_SUCCESS:
        return {
          ...state,
          fetchingFriends: false,
          friends: action.payload
        };
      case ADD_FRIEND_FAILURE:
        return {
          ...state,
          fetchingFriends: false,
          error: action.payload
        };
      case FETCH_FRIENDS_START:
        return {
          ...state,
          fetchingFriends: true
        };
      case FETCH_FRIENDS_SUCCESS:
        return {
          ...state,
          error: null,
          fetchingFriends: false,
          friends: action.payload
        };
      default:
        return state;
    }
  };
  
  export default friendsReducer;