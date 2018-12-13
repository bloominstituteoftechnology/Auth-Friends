import * as actionTypes from '../actions';

const initState = {
  friends: [],
  fetchingFriends: false,
  updatingFriend: false,
  creatingFriend: false,
  deletingFriend: false,
  error: null
};

export const friendsReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_FRIENDS:
      return { ...state, fetchingFriends: true };
    case actionTypes.FETCH_FRIENDS:
      return { ...state, friends: action.payload, fetchingFriends: false };
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
        fetchingFriends: false,
        creatingFriend: false,
        deletingFriend: false,
        updatingFriend: false,
        error: action.payload
      };
    default:
      return state;
  }
};
