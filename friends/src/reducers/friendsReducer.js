import { FETCHING, FETCHED, ERROR, ADD_FRIEND, FRIEND_ADDED, DELETE_FRIEND, FRIEND_DELETED } from '../actions';

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    addingFriend: false,
    friendAdded: false,
    // updatingFriend: false,
    // friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    hasErrors: null
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
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
        hasErrors: true
      });
      case ADD_FRIEND:
      return Object.assign({}, state, {
        addingFriend: true
      });
      case FRIEND_ADDED:
      return Object.assign({}, state, {
        addingFriend: false,
        friendAdded: true,
        friends: [...state.friends, action.payload]
      });


      case DELETE_FRIEND:
      return Object.assign({}, state, {
        deletingFriend: true
      });
      case FRIEND_DELETED:
      return Object.assign({}, state, {
        deletingFriend: false,
        friendDeleted: true,
        friends: action.payload
      });
    default:
      return state;
  }
};
