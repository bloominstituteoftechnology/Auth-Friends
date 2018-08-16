import { FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from "../actions/types";

const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  friends: [],
  isFetching: false,
  isFetched: false,
  hasError: false
};

export const setInitialStateReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING:
      // return Object.assign({}, state, {
      //   ...state,
      //   isFetching: true,
      //   isFetched: false
      // });
      //same as above, using object spread syntax
      return {
        ...state,
        isFetching: true,
        isFetched: false
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        friends: action.payload
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: true,
        isFetched: false,
        hasError: action.payload
      };
    default:
      return state;
  }
};
