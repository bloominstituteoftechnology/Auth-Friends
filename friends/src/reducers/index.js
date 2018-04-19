import { FETCHING, FETCHED, ERROR, SAVING, SAVED } from "../actions";
const initialState = {
  friends: [],
  fetching: false,
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetching: true };
    case ERROR:
      return { ...state, error: action.payload };
    case FETCHED:
      return { ...state, friends: action.payload, fetching: false };
    case SAVING:
      return { ...state, fetching: true };
    case SAVED:
      return {
        ...state,
        friends: [...state.friends, action.payload],
        fetching: false
      };
    default:
      return state;
  }
};
