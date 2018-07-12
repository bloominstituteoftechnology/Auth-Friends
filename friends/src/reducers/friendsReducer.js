import { FETCHING_DATA, ON_DATA_FETCHED, ON_DATA_ERROR } from '../actions';

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
}

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return Object.assign({}, state, { fetchingFriends: true });
    case ON_DATA_FETCHED:
      return Object.assign({}, state, { 
        friends: action.payload.results,
        fetchingFriends: false,
        friendsFetched: true
      });
    case ON_DATA_ERROR:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
};