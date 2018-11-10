import {LOADING, ERROR, FETCHED_FRIENDS} from "../actions";
const initialState = {
  friends: [],
  error: null,
  loading: false

  // Array characters, Boolean fetching, null error.
};
export const friendsReducer = (state = initialState, action) => {
  // Fill me in with the important reducers
  // action types should be FETCHING, SUCCESS and FAILURE
  // your switch statement should handle all of these cases.

  switch (action.type) {
    case LOADING:
      return Object.assign({}, state, {loading: true});
    case FETCHED_FRIENDS:
      return Object.assign({}, state, {
        characters: action.friends,
        loading: false,
        error: ''
      });
    case ERROR:
      return Object.assign({}, state, {
        error: action.payload,
        loading: false
      });
    default:
      return state
  }
};
