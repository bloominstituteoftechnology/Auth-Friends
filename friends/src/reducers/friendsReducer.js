import { FETCHING, FETCHED, ERROR } from '../actions';
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

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCHING:
      return Object.assign( {}, state, { fetching: true } );
    case FETCHED:
      console.log(action.payload);
      return Object.assign( {}, state, { fetched: true, fetching: false, friends: action.payload } );
    case ERROR:
      return Object.assign( {}, state, { fetched: false, fetching: false, error: action.payload } );
    default:
      return state;
  }
};
