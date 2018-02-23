import {
  IS_FETCHING,
  FRIENDS_FETCHED,
  ERROR_FETCHING_FRIENDS,
  IS_SAVING,
  FRIENDS_SAVED,
  ERROR_SAVING_FRIENDS,
  IS_UPDATING,
  FRIENDS_UPDATED,
  ERROR_UPDATING_FRIENDS
} from "../actions";

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

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_FETCHING:
      return {
        ...state,
        fetchingFriends: true
      };
    case FRIENDS_FETCHED:
      return {
        ...state,
        friendsFetched: true,
        fetchingFriends: false,
        friends: action.payload
      };
    case ERROR_FETCHING_FRIENDS:
      return {
        ...state,
        fetchingFriends: false,
        error: action.payload
      };
    case IS_SAVING:
      return {
        ...state,
        savingFriends: true,
        friendsSaved: false
      };
    case FRIENDS_SAVED:
      return {
        ...state,
        friends: action.payload,
        savingFriends: false,
        friendsSaved: true
      };
    case ERROR_SAVING_FRIENDS:
      return {
        ...state,
        savingFriends: false,
        friendsSave: false,
        error: action.payload
      };
    case IS_UPDATING:
      return {
        ...state,
        updatingFriends: true,
        friendsUpdated: false
      };
    case FRIENDS_UPDATED:
      return {
        ...state,
        friends: action.payload,
        updatingFriends: false,
        friendsUpdated: true
      };
    case ERROR_UPDATING_FRIENDS:
      return {
        ...state,
        updatingFriends: false,
        friendsUpdated: false,
        error: action.payload
      };
    default:
      return state;
  }
};
