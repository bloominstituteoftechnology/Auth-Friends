import {
  FRIENDS_FETCHING,
  FRIENDS_FETCHED,
  FRIENDS_SAVING,
  FRIENDS_SAVED,
  ERROR_SAVING,
  ERROR_FETCHING,
  FRIEND_DELETING,
  FRIEND_DELETED,
  ERROR_DELETING,
} from '../actions';

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
  error: null,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FRIENDS_FETCHING:
      return {
        ...state,
        fetchingFriends: true,
      };
    case FRIENDS_FETCHED:
      return {
        ...state,
        friendsFetched: true,
        fetchingFriends: false,
        friends: action.payload,
      };
    case ERROR_FETCHING:
      return {
        ...state,
        fetchingFriends: false,
        error: true,
      };
    case FRIENDS_SAVING:
      return {
        ...state,
        savingFriends: true,
      };
    case FRIENDS_SAVED:
      return {
        ...state,
        savingFriends: false,
        friendsSaved: true,
        friends: action.payload,
      };
    case ERROR_SAVING:
      return {
        ...state,
        savingFriends: false,
        error: true,
      }
    case FRIEND_DELETING:
      return {
        ...state,
        deletingFriend: true,
      };
    case FRIEND_DELETED:
      return {
        ...state,
        deletingFriend: false,
        friendDeleted: true,
        friends: action.payload,
      };
    case ERROR_DELETING:
      return {
        ...state,
        deletingFriend: false,
        error: true,
      }
    
    default:
      return state;
  }
};
