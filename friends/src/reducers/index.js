import {
  FETCH_FRIENDS,
  FETCHING_FRIENDS,
  ADD_FRIEND,
  ADDING_FRIEND,
  REMOVE_FRIEND,
  REMOVING_FRIEND,
  UPDATE_FRIEND,
  UPDATING_FRIEND,
  ERROR
} from '../actions/ActionTypes';

const initialState = {
  friends: [],
  error: null,
  fetchingFriends: false,
  friendsFetched: false,
  addingFriend: false,
  friendAdded: true,
  removingFriend: false,
  friendRemoved: true,
  updatingFriend: false,
  friendUpdated: true
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIENDS:
      return state;
    case FETCHING_FRIENDS:
      return state;
    case ADD_FRIEND:
      return state;
    case ADDING_FRIEND:
      return state;
    case REMOVE_FRIEND:
      return state;
    case REMOVING_FRIEND:
      return state;
    case UPDATE_FRIEND:
      return state;
    case UPDATING_FRIEND:
      return state;
    case ERROR:
      return state;
    default:
      return state;
  }
};