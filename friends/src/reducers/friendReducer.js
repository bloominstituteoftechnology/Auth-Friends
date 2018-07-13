import {FETCHING_FRIENDS, FETCHED_FRIENDS, FETCHING_FRIENDS_ERROR, SAVING_FRIEND, SAVED_FRIEND, SAVING_FRIEND_ERROR, UPDATING_FRIEND, UPDATED_FRIEND, DELETING_FRIEND, DELETED_FRIEND} from '../actions';
const initialState ={
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: {data: []},
  error: null
};
export const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return {...state, fetchingFriends: true};
    case FETCHED_FRIENDS:
      console.log(typeof action.payload);
      return {...state, fetchingFriends: false, friendsFetched: true, friends: action.payload};
    case FETCHING_FRIENDS_ERROR:
      return {...state, error: action.payload};
    default:
      return state;
  }
};
