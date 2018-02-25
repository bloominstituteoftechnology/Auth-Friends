import * as actionTypes from '../actions/actions';

const initialState = {
  friends: [],
  fetchingFriends: false,
  addingFriend: false,
  error: null,
}

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_FRIENDS:
      return { ...state, fetchingFriends: true };
    case actionTypes.FRIENDS_FETCHED:
      return { ...state, friends: action.payload, fetchingFriends: false };
    case actionTypes.ADDING_FRIEND:
      return { ...state, addingFriend: true };
    case actionTypes.FRIEND_ADDED:
      return { ...state, friends: action.payload, addingFriend: false };
    case actionTypes.ERROR:
      return {
        ...state,
        fetchingFriends: false,
        addingFriend: false,
        error: action.payload,
      }
    default:
      return state;
  }
}