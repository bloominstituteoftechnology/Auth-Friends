import {
  FETCHING_FRIENDS,
  FRIENDS_FETCHED,
  ADDING_FRIEND,
  FRIEND_ADDED,
  REMOVING_FRIEND,
  FRIEND_REMOVED,
  UPDATING_FRIEND,
  FRIEND_UPDATED,
  ERROR
} from '../actions/ActionTypes';

const initialState = {
  friends: [],
  error: null,
  fetchingFriends: false,
  addingFriend: false,
  removingFriend: false,
  updatingFriend: false,
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return Object.assign({}, state, {
        fetchingFriends: true,
        error: null
      });

    case FRIENDS_FETCHED:
      return Object.assign({}, state, { 
        friends: state.friends.concat(action.payload),
        fetchingFriends: false,
        error: null
      });

    case ADDING_FRIEND:
      return Object.assign({}, state, {
        addingFriend: true,
        error: null
      });

    case FRIEND_ADDED:
      return Object.assign({}, state, {
        friends: action.payload,
        addingFriend: false,
        error: null
      });

    case REMOVING_FRIEND:
      return Object.assign({}, state, {
        removingFriend: true,
        error: null
      });

    case FRIEND_REMOVED:
      return Object.assign({}, state, {
        friends: action.payload,
        removingFriend: false,
        error: null
      });

    case UPDATING_FRIEND:
      return Object.assign({}, state, {
        updatingFriend: true,
        error: null
      });

    case FRIEND_UPDATED:
      return Object.assign({}, state, {
        friends: action.payload,
        updatingFriend: false,
        error: null
      });

    case ERROR:
      return Object.assign({}, state, { 
        error: action.payload,
        fetchingFriends: false,
        addingFriend: false,
        removingFriend: false,
        updatingFriend: false,
      });

    default:
      return state;
  }
};