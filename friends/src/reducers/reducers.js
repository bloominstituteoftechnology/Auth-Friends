import { IS_FETCHING, FRIENDS_FETCHED, ERROR_FETCHING_FRIENDS } from '../actions/getFriends';
import { IS_SAVING, FRIENDS_SAVED, ERROR_SAVING_FRIENDS } from '../actions/createNewFriend';
import { IS_DELETING, FRIEND_DELETED, ERROR_DELETING_FRIEND } from '../actions/deleteFriend';

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

export const rootReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case IS_FETCHING:
      return { ...state, fetchingFriends: true };
    case FRIENDS_FETCHED:
      // console.log('Friends: ', action.payload);
      return {
        ...state,
        fetchedFriends: true,
        fetchingFriends: false,
        friends: action.payload
      };
    case ERROR_FETCHING_FRIENDS:
      return { ...state, fetchingFriends: false, error: action.payload };
      case IS_SAVING:
        return { ...state, savingFriends: true };
      case FRIENDS_SAVED:
        return {
          ...state,
          friendsSaved: true,
          savingFriends: false,
          friends: action.payload
        };
      case ERROR_SAVING_FRIENDS:
        return { ...state, savingFriends: false, error: action.payload };
      case IS_DELETING:
        return { ...state, deletingFriend: true };
      case FRIEND_DELETED:
        return {
          ...state,
          friendDeleted: true,
          deletingFriend: false,
          friends: action.payload
        };
      case ERROR_DELETING_FRIEND:
        return { ...state, deletingFriend: false, error: action.payload };
      default:
      return state;
  }
};