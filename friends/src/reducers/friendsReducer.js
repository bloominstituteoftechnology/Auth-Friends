import { FETCHING_FRIENDS,FETCHING_FRIENDS_SUCCESS, FETCHING_FRIENDS_ERROR } from '../actions/friendsActions.js';

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

export const friendsReducer = ( state = initialState, action ) => {
  // Set up switch here
  switch ( action.type ) {
    case FETCHING_FRIENDS: 
    return Object.assign({}, state, { fetchingFriends: true });
    case FETCHING_FRIENDS_SUCCESS:
    return Object.assign({}, state, { 
      fetchingFriends: false, 
      error: null,
      friends: [...action.payload]
    } );
    case FETCHING_FRIENDS_ERROR:
    return Object.assign({}, state, {
      fetchingFriends: false,
      error: action.payload
    });
    default: 
    return state;
  }
};
