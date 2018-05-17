import { FETCHING, FETCHED, ERROR} from '../actions';

const initialState = {
  friends: [],
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  error: null
}

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHED:
      return Object.assign({}, state, {
        friends: action.payload,
        friendsFetched: false,
        fetchingFriends: false
      });
    case FETCHING:
      return Object.assign({}, state, { fetchingFriends: false });
    case ERROR:
      return Object.assign( {}, state, { friendsFetched: false, fetchingFriends: false, error: action.payload } );
    default:
      return state;
    }
};

