import { FETCHING, FETCHED, ERROR, ADDING } from "../actions/actions";

const initialState = {
  friends: [],
  fetchingFriends: false,
  friendsFetched: false,
  error: null,
  addingFriend: false
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, {
        fetchingFriends: true,
        friendsFetched: false,
        error: null
      });
    case FETCHED:
      return Object.assign({}, state, {
        fetchingFriends: false,
        friendsFetched: true,
        friends: action.payload,
        error: null
      });
    case ERROR:
      return Object.assign({}, state, {
        fetchingFriends: false,
        friendsFetched: false,
        error: action.payload
      });
    case ADDING:
      return Object.assign({}, state, {
        addingFriend: true
      });
    default:
      return state;
  }
};
