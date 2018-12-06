import {
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAILURE,
  ADD_FRIENDS_START,
  ADD_FRIENDS_SUCCESS,
  ADD_FRIENDS_FAILURE
} from "../actions";
const initialState = {
  friends: [],
  error: null,
  fetching: false
};
export const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIENDS_START:
      return {
        ...state,
        fetching: true
      };
    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        error: null,
        fetching: false,
        friends: action.payload
      };
    case FETCH_FRIENDS_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    case ADD_FRIENDS_START:
      return {
        ...state,
        fetching: true
      };
    case ADD_FRIENDS_SUCCESS:
      return {
        ...state,
        error: null,
        fetching: false,
        friends: action.payload
      };
    default:
      return state;
  }
};
