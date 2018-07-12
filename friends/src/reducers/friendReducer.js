import { FETCHING, FETCHED, ERROR } from "../actions";

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [],
  error: null
};

export const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING:
      return Object.assign({}, state, {
        fetchingFriends: true,
        friendsFetched: false
      });
    case FETCHED:
      return Object.assign({}, state, {
        fetchingFriends: false,
        friendsFetched: true,
        friends: action.payload
      });
    case ERROR:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
};
