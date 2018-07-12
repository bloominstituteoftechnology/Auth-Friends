import { FETCHING, FETCHED, ERROR, ADDING, ADDED } from '../actions';

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
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, {
        fetchingFriends: true,
      });

    case FETCHED:
      return Object.assign({}, state, {
        friends: action.payload,
        fetchingFriends: false,
        friendsFetched: true,
      });

    case ERROR:
      return Object.assign({}, state, {
        fetchingFriends: false,
        friendsFetched: false,
        error: action.payload.stack,
      });

    case ADDING:
      return Object.assign({}, state, {
        savingFriends: true,
        friendsSaved: false,
      });

    case ADDED:
      return Object.assign({}, state, {
        savingFriends: true,
        friendsSaved: true,
        friends: action.payload,
      });

    default:
      return state;
  }
};

export default rootReducer;
