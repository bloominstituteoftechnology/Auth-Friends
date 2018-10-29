import {
  FETCHING,
  FETCHED,
  ERROR,
  ADDING,
  DELETE,
  EDITING,
  EDITED
} from "../actions/actions";

const initialState = {
  friends: [],
  error: null,
  fetchingFriends: false,
  friendsFetched: false,
  addingFriend: false,
  deletedFriend: false,
  editingFriend: false,
  id: ""
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
        editingFriend: false,
        error: null
      });
    case ADDING:
      return Object.assign({}, state, {
        addingFriend: true
      });
    case DELETE:
      return Object.assign({}, state, {
        deletedFriend: true
      });
    case EDITING:
      return Object.assign({}, state, {
        editingFriend: true,
        id: action.payload
      });
    case EDITED:
      return Object.assign({}, state, {
        editingFriend: false
      });
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
