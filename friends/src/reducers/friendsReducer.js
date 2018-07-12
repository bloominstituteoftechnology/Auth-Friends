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
      console.log('state', state);
      console.log('action.payload', action.payload);
      const lars = Object.assign({}, state, { 
        friends: action.payload,
        fetchingFriends: false,
        friendsFetched: true
      });
      console.log('L A R S', lars);
      return lars;
    case ON_DATA_ERROR:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
};