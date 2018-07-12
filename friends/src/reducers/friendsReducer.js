import {
  FETCHING_FRIENDS,
  FRIENDS_FETCHED,
  ERROR_FETCHING_FRIENDS
} from "../actions";

const initialState = {
  friends: [],
  fetching: false,
  fetched: false,
  error: null
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return Object.assign({}, state, {
        fetching: true,
        fetched: false,
        error: null
      });
    case FRIENDS_FETCHED:
      return Object.assign({}, state, {
        fetching: false,
        fetched: true,
        chars: action.payload
      });
    case ERROR_FETCHING_FRIENDS:
      return Object.assign({}, state, {
        fetching: false,
        fetched: false,
        error: action.payload
      });
    default:
      return state;
  }
};
