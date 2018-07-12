import { FETCHING_DATA, ON_DATA_FETCHED, ON_DATA_ERROR, ADDING_FRIEND, ON_FRIEND_ADDED, CHANGE_FRIEND_DATA } from '../actions';

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  addingFriend: false,
  friendAdded: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [],
  friend: {
    name: '',
    age: '',
    email: ''
  },
  error: null
}

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return Object.assign({}, state, { fetchingFriends: true });
    case ON_DATA_FETCHED:
      return Object.assign({}, state, { 
        friends: action.payload,
        fetchingFriends: false,
        friendsFetched: true
      });
    case ADDING_FRIEND:
      return Object.assign({}, state, { addingFriend: true });
    case ON_FRIEND_ADDED:
      return Object.assign({}, state, { 
        friends: action.payload,
        addingFriend: false,
        friendAdded: true,
        friend: {
          name: '',
          age: '',
          email: ''
        }
      });
    case CHANGE_FRIEND_DATA:
      return Object.assign({}, state, { friend: action.payload
    });
    case ON_DATA_ERROR:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
};