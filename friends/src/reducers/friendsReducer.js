import {
  DATA_REQUESTED,
  ERROR_GETTING_DATA,
  FRIENDS_FETCHED,
  POST_SUCCESS
} from "../actions";

const initialState = {
  friends: [],
  fetching: false,
  fetched: false,
  error: null,
  newFriend: {},
  showForm: true
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_REQUESTED:
      return Object.assign({}, state, {
        fetching: true,
        fetched: false,
        error: null
      });
    case ERROR_GETTING_DATA:
      return Object.assign({}, state, {
        fetching: false,
        fetched: false,
        error: action.payload
      });
    case FRIENDS_FETCHED:
      return Object.assign({}, state, {
        fetching: false,
        fetched: true,
        friends: action.payload
      });
    case POST_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        fetched: true,
        newFriend: {},
        friends: action.payload
      });
    default:
      return state;
  }
};
