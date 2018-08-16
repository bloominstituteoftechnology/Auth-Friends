import { GET_FRIENDS, FETCHING_FRIENDS, ERROR, SAVING_FRIENDS, FRIENDS_SAVED } from '../actions';

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

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return {...state, fetchingFriends: true};
    case GET_FRIENDS:
      return {...state, fetchingFriends: false, friendsFetched: true, friends: action.payload};
    case ERROR:
      return {...state, error: action.payload};
    case SAVING_FRIENDS:
      return {...state, savingFriends: true};
    case FRIENDS_SAVED:
      return {...state, savingFriends: false, friendsSaved: true, friends: action.payload};
    default:
      return state;
  }
};
