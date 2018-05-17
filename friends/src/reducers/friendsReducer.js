import { 
  FETCHING_FRIENDS,
  FRIENDS_FETCHED, 
  FETCHING_FRIEND, 
  FRIEND_FETCHED,
  ERROR
} from '../actions';

const initialState = {
  friends: [],
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  fetchingFriend: false,
  friendFetched: false,
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
    case FRIENDS_FETCHED:
      return Object.assign({}, state, {
        friends: action.payload,
        friendsFetched: true,
        fetchingFriends: false
      });
    case FETCHING_FRIENDS:
      return Object.assign({}, state, { fetchingFriends: true, friendsFetched: false });
    case ERROR:
      return Object.assign( {}, state, { friendsFetched: false, fetchingFriends: false, error: action.payload } );
    default:
      return state;
    }
};

export const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FRIEND_FETCHED:
      return Object.assign({}, state, {
        friend: action.payload,
        friendFetched: true,
        fetchingFriend: false
      });
    case FETCHING_FRIEND:
    return Object.assign({}, state, { fetchingFriend: true, friendFetched: false });
    case ERROR:
      return Object.assign( {}, state, { friendFetched: false, fetchingFriends: false, error: action.payload } );
    default:
      return state;
    }
};


