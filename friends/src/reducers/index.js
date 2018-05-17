// Import Action Types from Actions
import {
  FINDING,
  ERROR,
  LOADING,
  LOADED,
} from '../actions';

const initialState = {
  findingFriends: false,
  foundFriends: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  loading: false,
  loaded: false,
  friends: [],
  error: null
}

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOADED:
      return {
        ...state,
        friends: [...action.payload],
        loading: false,
        loaded: true,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state;
  }
}