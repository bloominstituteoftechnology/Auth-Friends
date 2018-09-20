// import our actions here
import {
  FETCHING,
  FETCHED,
  ERROR,
  ADD_FRIEND,
  DELETE_FRIEND,
  EDIT_FRIEND,
  FRIEND_ADDED,
  FRIEND_DELETED,
  FRIEND_EDITED
} from '../actions';

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  addingFriend: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [],
  error: null
}

export const friendsReducer = (state = initialState, action) => {
  switch(action.type) {

    case FETCHING:
      return Object.assign({}, state, {
        fetchingFriends: true
      });

    case FETCHED:
      return Object.assign({}, state, {
        fetchingFriends: false,
        friendsFetched: true,
        friends: action.payload
      });    

      case ERROR:
        return Object.assign({}, state, {
          fetchingFriends: false,
          error: true
        });

    case ADD_FRIEND:
      return Object.assign({}, state, {
        addingFriend: true
      });

    case FRIEND_ADDED:
      return Object.assign({}, state, {
        addingFriend: false,
        friendsSaved: true,
        friends: [...state.friends, action.payload]
      });

    
    default:
      return state;
  }
}