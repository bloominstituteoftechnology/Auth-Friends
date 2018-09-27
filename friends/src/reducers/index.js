import {
  FETCHING_FRIENDS,
  FRIENDS_FETCHED,
  ERROR_FETCHED,
  SAVING_FRIEND,
  FRIEND_SAVED,
  ERROR_SAVED
} from '../actions';

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  savingFriend: false,
  friendSaved: false,
  friends: [],
  error: null
}