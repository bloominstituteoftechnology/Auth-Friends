import { FETCHING, FETCHED, ERROR, SAVING_FRIEND } from "../actions";

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  savingFriends: false,
  friends: [],
  error: null
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, {
        fetchingFriends: true,
        friendsFetched: false,
        error: null
      });
    case ERROR:
      return Object.assign({}, state, {
        fetchingFriends: false,
        friendsFetched: false,
        error: action.payload
      });
    case FETCHED:
      return Object.assign({}, state, {
        fetchingFriends: false,
        friendsFetched: true,
        friends: action.payload
      });
    case SAVING_FRIEND:
      return Object.assign({}, state, {
        savingFriends: true
      });
    default:
      return state;
  }
};
