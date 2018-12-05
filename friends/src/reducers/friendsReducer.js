import {
  ERROR,
  FETCHING,
  FETCHED,
  SAVING,
  SAVED,
  UPDATING,
  UPDATED,
  DELETING,
  DELETED
} from "../actions";

const initialState = {
  fetchingFriends: false,
  savingFriend: false,
  updatingFriend: false,
  deletingFriend: false,
  friends: [],
  error: null
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetchingFriends: true };
    case FETCHED:
      return { ...state, fetchingFriends: false, friends: action.payload };
    case SAVING:
      return { ...state, savingFriend: true };
    case SAVED:
      return { ...state, friends: action.payload, savingFriend: false };
    case UPDATING:
      return { ...state, updatingFriend: true };
    case UPDATED:
      return { ...state, updatingFriend: false, friends: action.payload };
    case DELETING:
      return { ...state, deletingFriend: true };
    case DELETED:
      return { ...state, deletingFriend: false, friends: action.payload };
    case ERROR:
      return {
        ...state,
        fetchingFriends: false,
        savingFriend: false,
        updatingFriend: false,
        deletingFriend: false,
        error: action.payload
      };
    default:
      return state;
  }
};
