import { FETCHING, FETCHED, ERROR, ADDING, ADDED } from "../actions/actions";

const initialState = {
  friends: [],
  error: null,
  fetchingFriends: false,
  friendsFetched: false,
  addingFriend: false
  //   addedFriend: false
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, {
        fetchingFriends: true,
        friendsFetched: false,
        error: null
      });
    case FETCHED:
      return Object.assign({}, state, {
        fetchingFriends: false,
        friendsFetched: true,
        friends: action.payload,
        error: null
      });
    case ADDING:
      return Object.assign({}, state, {
        addingFriend: true
      });
    // case ADDED:
    //   return Object.assign({}, state, {
    //     addingFriend: false,
    //     friends: action.payload
    //   });
    case ERROR:
      return Object.assign({}, state, {
        fetchingFriends: false,
        friendsFetched: false,
        error: action.payload
      });
    default:
      return state;
  }
};
