// import { combineReducers } from 'redux';

import {
  FETCH_FRIENDS_REQUEST,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAILURE,
  ADD_FRIENDS_REQUEST,
  ADD_FRIENDS_SUCCESS,
  ADD_FRIENDS_FAILURE
} from "../Actions";

const initialState = {
  isFetching: false,
  isAdding: false,
  isUpdating: false,
  isDeleting: false,
  friends: [],
  error: null
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIENDS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        friends: action.payload
      };
    case FETCH_FRIENDS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
      // without this default state, the app crashes! that's a little dumb!
    default:
      return state;
  }
};

export default friendsReducer;
//   export default combineReducers({

//   })
