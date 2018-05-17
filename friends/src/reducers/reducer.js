import { FETCHING, FETCHED, ERROR } from '../actions/actions';

const initialState = {
  friends: [],
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deleteFriend: false,
  friendDeleted: false,
  error:null
};

const friendsReducer = (state = initialState, action) => {
  switch(action.type) {
  case FETCHING:
    return Object.assign({}, state, {
      fetchingFriends: true,
      friendsFetched: false
    });

  case FETCHED:
    return Object.assign({}, state, {
      friends: [...state.friends, ...action.payload],
      fetchingFriends: false,
      friendsFetched: true
    });
    
  case ERROR:
    return Object.assign({}, state, {
      fetchingFriends: false,
      friendsFetched: false,
      error: action.payload
    });
    
  default:
  return state;
  };
};

export default friendsReducer;


