import { FETCHING_FRIENDS, FRIENDS_FETCHED, ERROR } from "../actions";

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

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return Object.assign({}, state, { fetchingFriends: true });
    case FRIENDS_FETCHED:
      return Object.assign({}, state, {
        friends: state.friends.concat(action.payload),
        fetchingFriends: false
      });
    case ERROR:
      return Object.assign({}, state, {
        fetchingFriends: false,
        friendsFetched: false,
        error: action.payload
      });
    default:
      return state;
  }
};
