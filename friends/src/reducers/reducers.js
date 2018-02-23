import {
  GETTING_FRIENDS,
  FRIENDS_RECEIVED,
  ERROR_GETTING_FRIENDS,
  CREATE_FRIEND,
  FRIEND_CREATED,
  ERROR_CREATING_FRIEND,
  DELETE_FRIEND,
  ERROR_DELETING_FRIEND,
  UPDATE_FRIEND,
  ERROR_UPDATING_FRIEND,
} from '../actions/actions';

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  deletingFriend: false,
  friends: [],
  error: null,
};

export const rootReducer = (state = initialState, action) => {
  console.log(`The reducer ran ${action}`);
  switch (action.type) {
    case 'GETTING_FRIENDS':
      return { ...state, gettingFriends: true };
    case 'FRIENDS_RECEIVED':
      return {
        ...state,
        friendsFetched: true,
        gettingFriends: false,
        friends: action.payload,
      };
    case ERROR_GETTING_FRIENDS:
      return console.log(action.error);
    case CREATE_FRIEND:
      return {
        ...state,
        savingFriends: true,
        gettingFriends: true,
        friends: action.payload,
      };
    case FRIEND_CREATED:
      return {
        ...state,
        friends: action.payload,
        savingFriends: false,
        friendsSaved: true,
      };
    case ERROR_CREATING_FRIEND:
      return state;
    case DELETE_FRIEND:
      return state;
    case ERROR_DELETING_FRIEND:
      return state;
    case UPDATE_FRIEND:
      return { ...state, updatingFriend: true };
    case ERROR_UPDATING_FRIEND:
      return state;
    default:
      return state;
  }
};


