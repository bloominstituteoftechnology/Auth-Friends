import { FETCHING, FETCHED, ERROR } from "../actions";

const intialState = {
  friends: [],
  fetching: false,
  error: null
};

export default (state = intialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetching: true };
    case ERROR:
      return { ...state, error: action.errorMsg };
    case FETCHED:
      return {
        ...state,
        friends: action.friends,
        fetching: false,
        error: null
      };
    default:
      return state;
  }
};
