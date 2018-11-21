import {
  FETCHING,
  FETCHED,
  SAVING,
  SAVED,
  UPDATING,
  UPDATED,
  DELETING,
  DELETED,
  ERROR
} from "../actions";

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  savingFriends: false,
  friendsSaved: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [
    {
      id: 1,
      name: "",
      age: 24,
      email: ""
    }
  ],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetchingFriends: true };
    case FETCHED:
      return {
        ...state,
        friends: action.friends,
        fetchingFriends: false,
        friendsFetched: true,
        error: null
      };
    case SAVING:
      return {
        ...state,
        savingFriends: true
      };
    case SAVED:
      return {
        ...state,
        savingFriends: false,
        friendsSaved: true,
        friends: action.friends
      };
    case UPDATING:
      return {
        ...state,
        updatingFriend: true,
        error: null,
        friends: action.friends
      };
    case UPDATED:
      return {
        ...state,
        updatingFriend: false,
        friendUpdated: true,
        error: null,
        friends: action.friends
      };
    case DELETING:
      return {
        ...state,
        deletingFriend: true,
        friends: action.friends
      };
    case DELETED:
      return {
        ...state,
        deletingFriend: false,
        friendDeleted: true,
        friends: action.friends
      };
    case ERROR:
      return {
        ...state,
        fetchingFriends: false,
        friendsFetched: false,
        error: action.errorMessage
      };

    default:
      return state;
  }
};
