import * as actionTypes from '../actions/friendsActions';

const initialState = {
  friends: [],
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_FRIEND:
      return { ...state, fetching: true };
    case actionTypes.ERROR_FETCHING_FRIEND:
      return { ...state, error: action.error };
    case actionTypes.FETCHED_FRIEND:
      return {
        ...state,
        friends: action.friends,
        fetching: false,
        error: null
      };
    case actionTypes.CREATING_FRIEND:
      return { ...state, savingFriends: true };
    case actionTypes.ERROR_CREATING_FRIEND:
      return { ...state, error: action.error };
    case actionTypes.FRIEND_CREATED:
      return { ...state, friends: action.friends, savingFriends: false };
    default:
      return state;
  }
};
