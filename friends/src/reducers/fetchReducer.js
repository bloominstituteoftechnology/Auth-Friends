import {
  ERROR,
  FETCHING,
  SUCCESS,
  SAVING,
  SAVED,
  UPDATING,
  UPDATED,
  DELETING,
  DELETED
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
        fetchingFriends: true
      };
    case SUCCESS:
      return {
        ...state,
        fetchingFriends: false,
        friendsFetched: true,
        friends: [...state.friends, ...action.payload]
      };
    case ERROR:
      return {
        ...state,
        fetchingFriends: false,
        friendsFetched: false,
        error: action.payload
      };
    default:
      return state;
  }
};
