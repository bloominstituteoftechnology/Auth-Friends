import {
  FETCHING_FRIENDS,
  FRIENDS_FETCHED,
  FRIENDS_SAVED,
  SAVING_FRIENDS,
  UPDATING_FRIEND,
  FRIEND_UPDATED,
  DELETING_FRIEND,
  FRIEND_DELETED,
  ERROR
} from '../actions';

const initialState = {
  friends: [],
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  error: null
};

export const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return Object.assign({}, state, { fetching: true });
    case FRIENDS_FETCHED:
      return Object.assign({}, state, {
        fetching: false,
        friends: action.payload
      });
    case FRIENDS_SAVED:
      return Object.assign({}, state, { fetching: true });
    case SAVING_FRIENDS:
      return Object.assign({}, state, {
        fetching: false,
        friends: action.payload
      });
    case ERROR:
      return Object.assign({}, state, { error: 'Error' });
    default:
      return state;
  }
};
