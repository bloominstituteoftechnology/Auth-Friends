import * as act from "../actions";

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
    case act.FETCHING:
      return { ...state, fetchingFriends: true };
    case act.FETCHED:
      return { ...state, fetchingFriends: false, friends: action.payload };
    case act.SAVING:
      return { ...state, savingFriend: true };
    case act.SAVED:
      return { ...state, friends: action.payload, savingFriend: false };
    case act.UPDATING:
      return { ...state, updatingFriend: true };
    case act.UPDATED:
      return { ...state, updatingFriend: false, friends: action.payload };
    case act.DELETING:
      return { ...state, deletingFriend: true };
    case act.DELETED:
      return { ...state, deletingFriend: false, friends: action.payload };
    case act.ERROR:
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
