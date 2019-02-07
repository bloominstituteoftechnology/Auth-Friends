import {
  FETCHINGFRIENDS,
  FETCHEDFRIENDS,
  ERROR,
  ADDINGFRIEND,
  ADDEDFRIEND,
  DELETINGFRIEND,
  DELETEDFRIEND,
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
        fetchingFriends: true,
        fetchedFriends: false,
        addingFriends: false,
        addedFriends: false,
        updatingFriends: false,
        deletingFriend: false,
        deletedFriend: false,
      };
    }
    case FETCHEDFRIENDS: {
      return {
        ...state,
        fetchingFriends: false,
        fetchedFriends: true,
        addingFriends: false,
        addedFriends: false,
        updatingFriends: false,
        deletingFriend: false,
        deletedFriend: false,
        friends: action.payload,
      };
    }
    case ADDINGFRIEND: {
      return {
        ...state,
        fetchingFriends: false,
        fetchedFriends: false,
        addingFriends: true,
        addedFriends: false,
        updatingFriends: false,
        deletingFriend: false,
        deletedFriend: false,
        friends: [...state.friends],
      };
    }
    case ADDEDFRIEND: {
      return {
        ...state,
        fetchingFriends: false,
        fetchedFriends: false,
        addingFriends: false,
        addedFriends: true,
        updatingFriends: false,
        deletingFriend: false,
        deletedFriend: false,
        friends: [...state.friends, action.payload],
      };
    }
    case DELETINGFRIEND: {
      return {
        ...state,
        fetchingFriends: false,
        fetchedFriends: false,
        addingFriends: false,
        addedFriends: false,
        updatingFriends: false,
        deletingFriend: true,
        deletedFriend: false,
      };
    }
    case DELETEDFRIEND: {
      return {
        ...state,
        fetchingFriends: false,
        fetchedFriends: false,
        addingFriends: false,
        addedFriends: false,
        updatingFriends: false,
        deletingFriend: false,
        deletedFriend: true,
        friends: action.payload,
      };
    }
    case ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
