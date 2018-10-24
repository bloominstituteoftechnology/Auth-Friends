import { FETCHING, FETCHING_SUCCESS, FETCHING_FAILURE } from "../actions";

const initialState = {
  friends: [],
  error: null,
  fetchingFriends: false
};
export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return { ...state, fetchingFriends: true };
    case FETCHING_SUCCESS:
      return {
        ...state,
        friends: [...state.friends, ...action.payload],
        fetchingFriends: false
      };
    case FETCHING_FAILURE:
      return { ...state, fetchingFriends: false, error: action.payload };
    default:
      return state;
  }
};
