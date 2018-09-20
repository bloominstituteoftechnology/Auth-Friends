import {
  FETCHING,
  FETCHED,
  SAVING,
  SAVED,
  DELETING,
  DELETED,
  UPDATED,
  UPDATING
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
    case FETCHING:
      return {
        ...state,
        fetchingFriends: true,
        friendsFetched: false
      };
    case FETCHED:
      return {
        ...state,
        friendsFetched: true,
        fetchingFriends: false,
        friends: action.payload
      };
    case SAVING:
      return {
        ...state,
        savingFriends: true,
        friendsSaved: false
      };
    case SAVED:
      return {
        ...state,
        savingFriends: false,
        friendsSaved: true,
        friends: action.payload
      };
    case DELETING:
      return {
        ...state,
        deletingFriend: true,
        friendDeleted: false
      };
    case DELETED:
      return {
        ...state,
        deletingFriend: false,
        friendDeleted: true,
        friends: action.payload
      };
    case UPDATING:
      return {
        ...state,
        updatingFriend: true,
        friendUpdated: false
      };
    case UPDATED:
      return {
        ...state,
        updatingFriend: false,
        friendUpdated: true,
        friends: action.payload
      };
    default:
      return state;
  }
};
