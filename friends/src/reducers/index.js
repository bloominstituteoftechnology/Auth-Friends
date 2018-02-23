// import { combineReducers } from 'redux';
// import friendsReducer from './friendsReducer';

// const rootReducer = combineReducers({
//   friends: friendsReducer
// })

// export default rootReducer;

import { 
  FETCHING_FRIENDS, 
  FRIENDS_FETCHED, 
  SAVING_FRIENDS,
  FRIENDS_SAVED,
  FRIEND_DELETED,
  DELETING_FRIENDS,
  ERROR, 
} from '../actions';

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriends: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [],
  error: null,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_FRIENDS:
      return {
        ...state,
        fetchingFriends: true,
      }
    case FRIENDS_FETCHED:
      return {
        ...state,
        fetchingFriends: false,
        friendsFetched: true,
        friends: action.payload,
      }
    case SAVING_FRIENDS:
      return {
        ...state,
        savingFriends: true,
      }
    case FRIENDS_SAVED:
      return {
        ...state,
        friendsSaved: true,
        savingFriends: false,
        friends: [...state.friends, action.payload]
      }
    case DELETING_FRIENDS:
      return {
        ...state,
        deletingFriend: true,
      }
    case FRIEND_DELETED:
      return {
        friendDeleted: true,
        deletingFriend: false,
        friends: state.friends.splice(action.payload, 1)
      }
    case ERROR:
      return {
        ...state,
        fetchingFriends: false,
        friendsFetched: false,
        friendsSaved: false,
        savingFriends: false,
        error: action.payload,
      }
    default:
      return state;
  }
}