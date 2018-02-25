import * as actionTypes from '../actions/actions';

const initialState = {
  friends: [],
  fetchingFriends: false,
  error: null,
}

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_FRIENDS:
      return { ...state, fetchingFriends: true };
    case actionTypes.FRIENDS_FETCHED:
      return { ...state, friends: action.payload, fetchingFriends: false };
    case actionTypes.ERROR:
      return {
        ...state,
        fetchingFriends: false,
        error: action.payload,
      }
    default:
      return state;
  }
}