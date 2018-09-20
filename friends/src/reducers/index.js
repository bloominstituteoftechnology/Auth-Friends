// create friends reducer

import { FETCHING, SUCCESS, ERROR } from "../actions";

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
  error: ""
};
export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetchingFriends: true };
    case SUCCESS:
      return {
        ...state,
        friends: action.payload,
        fetchingFriends: false,
        friendsFeteched: true
      };
    case ERROR:
      return { ...state, error: "There was an error retrieveing Friends data" };
    default:
      return state;
  }
};
