import { FETCHING_FRIENDS, FRIENDS_FETCHING_SUCCESS, FRIENDS_FETCHING_ERROR } from '../actions';

const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [], fetchingFriends: false, error: null, fetched: false
};
export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return Object.assign({}, state, { fetchingFriends: true });
    case FRIENDS_FETCHING_SUCCESS:
      return Object.assign({}, state, {
        chars:[...state.friends, ...action.payload],
        fetchingFriends: false,
        fetched: true
      });
    case FRIENDS_FETCHING_ERROR:
      return Object.assign({}, state, {
        fetchingFriends: false,
        error: "Error fetching Friends"
      });
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};