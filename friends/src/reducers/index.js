// Import Action Types from Actions
import {
  FINDING,
  FOUND,
  ERROR,
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
  friends: [],
  error: null
}

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FINDING:
      return {
        ...state,
        findingFriends: true,
      };
    case FOUND:
      return {
        ...state,
        friends: [...state.friends, ...action.payload],
        findingFriends: false,
        foundFriends: true,
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