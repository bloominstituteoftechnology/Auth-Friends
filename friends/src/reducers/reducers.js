import { FETCHING_FRIENDS, FRIENDS_FETCHED, ERROR_FETCHING_FRIENDS } from '../actions/index.js';
import { SAVING_FRIENDS, FRIENDS_SAVED, ERROR_SAVING_FRIENDS } from '../actions/index.js';

// const initialState = {
//     fetchingFriends: false,  Getting Friends
//     friendsFetched: false,
//     savingFriends: false,    Adding Friends
//     friendsSaved: false,
//     updatingFriend: false,   Updating Friends
//     friendUpdated: false,
//     deletingFriend: false,   Deleting Friends
//     friendDeleted: false,
//     friends: [],
// }

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  savingFriends: false,
  friendsSaved: false,
  friends: [],
};

export const getReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return { ...state, fetching: true };
    case FRIENDS_FETCHED:
      return {
        ...state,
        fetched: true,
        fetching: false,
        friends: action.payload,
      };
    case ERROR_FETCHING_FRIENDS:
      return { ...state, fetching: false, error: action.payload };
    default:
      return state;
  }
};

export const addReducer = (state = initialState, action) => {
  const newFriend = action.payload;
  switch (action.type) {
    case SAVING_FRIENDS:
      return { ...state, fetching: true };
    case FRIENDS_SAVED:
      return {
        ...state,
        fetched: true,
        fetching: false,
        friends: { ...state.friends, newFriend},
      };
    case ERROR_SAVING_FRIENDS:
      return { ...state, fetching: false, error: action.payload };
    default:
      return state;
  }
};