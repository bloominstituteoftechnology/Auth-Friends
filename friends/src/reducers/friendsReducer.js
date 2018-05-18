import * as actionTypes from '../actions';

const initialState = {
  friends: [],
  gettingFriends: false,
  updatingFriend: false,
  creatingFriend: false,
  deletingFriend: false,
  error: null
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_FRIENDS:
      return { ...state, gettingFriends: true };
    case actionTypes.FRIENDS_FETCHED:
      return { ...state, friends: action.payload, gettingFriends: false };
    case actionTypes.UPDATING_FRIEND:
      return { ...state, updatingFriend: true };
    case actionTypes.UPDATE_FRIEND:
      return { ...state, friends: action.payload, updatingFriend: false };
    case actionTypes.DELETING_FRIEND:
      return { ...state, deletingFriend: true };
    case actionTypes.DELETE_FRIEND:
      return { ...state, friends: action.payload, deletingFriend: false };
    case actionTypes.CREATING_FRIEND:
      return { ...state, creatingFriend: true };
    case actionTypes.CREATE_FRIEND:
      return { ...state, friends: action.payload, creatingFriend: false };
    case actionTypes.ERROR:
      return {
        ...state,
        gettingFriends: false,
        creatingFriend: false,
        deletingFriend: false,
        updatingFriend: false,
        error: action.payload
      };
    default:
      return state;
  }
};