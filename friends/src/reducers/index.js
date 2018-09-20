import {
  FETCHING,
  FETCHED,
  ERROR,
  FRIEND_ADDED,
  ADDING_FRIEND,
  ADD_FRIEND_ERROR
} from "../actions";

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  friendAdded: false,
  addingFriend: false,
  friends: [],
  error: null
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, { fetchingFriends: true });
    case FETCHED:
      return Object.assign({}, state, {
        friends: action.payload,
        fetchingFriends: false,
        friendsFetched: true
      });
    case ERROR:
      return Object.assign({}, state, {
        fetchingFriends: false,
        error: action.payload
      });
    case ADDING_FRIEND:
      return {
        ...state,
        addingFriend: true
      };
    case FRIEND_ADDED:
      return {
        ...state,
        addingFriend: false,
        friendAdded: true,
        friends: action.payload
      };
    case ADD_FRIEND_ERROR:
      console.log(action.payload);
      return { ...state, addingFriend: false, error: action.payload };
    default:
      return state;
  }
};
