import { FETCHED_FRIEND, FETCHING_FRIEND, ERROR } from "../actions";
import { UPDATING_FRIENDS, FRIEND_UPDATED, FRIEND_ERROR } from "../actions";

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

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIEND:
      return { ...state, fetchingFriends: true };
    case ERROR:
      return { ...state, error: action.errorMessage };
    case FETCHED_FRIEND:
      return {
        ...state,
        fetchedFriends: true,
        fetchingFriends: false,
        friends: action.friends,
        error: null
      };
    case UPDATING_FRIENDS:
      return { ...state, savingFriends: true };
    case FRIEND_ERROR:
      return { ...state, error: action.errorMessage };
    case FRIEND_UPDATED:
      return {
        ...state,
        savingFriends: false,
        friends: action.friends
      };
    default:
      return state;
  }
};
