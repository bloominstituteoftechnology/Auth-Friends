import {
  FETCHED_FRIEND,
  FETCHING_FRIEND,
  ERROR_FETCHING_FRIEND,
  CREATING_FRIEND,
  ERROR_CREATING_FRIEND,
  FRIEND_CREATED,
  DELETING_FRIEND,
  FRIEND_DELETED,
} from "../actions";

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIEND:
      return { ...state, fetching: true };
    case ERROR_FETCHING_FRIEND:
      return { ...state, error: action.errorMessage };
    case FETCHED_FRIEND:
      return {
        ...state,
        friends: action.friends,
        fetching: false,
        error: null
      };
    case CREATING_FRIEND:
      return { ...state, savingFriends: true };
    case ERROR_CREATING_FRIEND:
      return { ...state, error: action.error };
    case FRIEND_CREATED:
      return { ...state, friends: action.friends, savingFriends: false };
    case DELETING_FRIEND:
      return {...state, deletingFriends: true};
    case FRIEND_DELETED:
      return {...state, friends: action.friends, deletingFriends: false, error: null};
    default:
      return state;
  }
};
