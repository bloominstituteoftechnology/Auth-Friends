import {
  FETCHINGFRIENDS,
  FETCHEDFRIENDS,
  ERROR,
  ADDINGFRIEND,
  ADDEDFRIEND,
} from '../actions/types.js';

const intialState = {
  fetchingFriends: false,
  fetchedFriends: false,
  addingFriends: false,
  addedFriends: false,
  updatingFriends: false,
  deletingFriend: false,
  deletedFriend: false,

  friends: [],

  error: null,
};

export const friendsReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCHINGFRIENDS: {
      return {
        ...state,
        fetchingFriends: false,
        fetchedFriends: false,
        addingFriends: false,
        addedFriends: false,
        updatingFriends: false,
        deletingFriend: false,
        deletedFriend: false,
        fetchingFriends: true,
      };
    }
    case FETCHEDFRIENDS: {
      return {
        ...state,
        fetchingFriends: false,
        fetchedFriends: false,
        addingFriends: false,
        addedFriends: false,
        updatingFriends: false,
        deletingFriend: false,
        deletedFriend: false,
        fetchedFriends: true,
        friends: action.payload,
      };
    }
    case ADDINGFRIEND: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
