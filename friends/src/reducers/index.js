import {
  FETCHING_FRIENDS,
  FRIENDS_FETCHED,
  FRIENDS_SAVED,
  SAVING_FRIENDS,
  DELETING_FRIEND,
  FRIEND_DELETED,
  ERROR_FETCHING_FRIENDS,
  ERROR_SAVING_FRIENDS,
  ERROR_DELETING_FRIENDS,
} from '../actions/index';

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

export const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case FETCHING_FRIENDS:
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
    case ERROR_FETCHING_FRIENDS:
      return {
        ...state,
        fetchingFriends: false,
        error: action.payload,
      };
    case SAVING_FRIENDS:
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
    case ERROR_SAVING_FRIENDS:
      return {
        ...state,
        savingFriends: false,
        error: action.payload,
      }; 
    case DELETING_FRIEND:
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
    case ERROR_DELETING_FRIENDS:
      return {
        ...state,
        deletingFriend: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
