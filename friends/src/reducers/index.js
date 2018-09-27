import {
  FETCHING_FRIENDS,
  FRIENDS_FETCHED,
  SAVING_FRIEND,
  FRIEND_SAVED,
  ERROR
} from '../actions';

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  savingFriend: false,
  friendSaved: false,
  friends: [],
  error: null
};

export const friendsReducer = ( state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return Object.assign({}, state, { fetchingFriends: true });
    case FRIENDS_FETCHED:
      return Object.assign({}, state, {
        friends: action.payload,
        fetchingFriends: false,
        friendsFetched: true
      });
    case SAVING_FRIEND:
      return Object.assign({}, state, { savingFriend: true });
    case FRIEND_SAVED:
      return Object.assign({}, state, {
        friends: action.payload,
        savingFriend: false,
        friendSaved: true
      });
    case ERROR:
      return Object.assign({}, state, {
        fetchingFriends: false,
        savingFriend: false,
        error: action.payload
      });
    default:
      return state;
  }
};