import {
  FETCHED,
  FETCHING,
  ERROR,
  ADDING,
  ADDED,
  UPDATING,
  UPDATED,
  DELETED,
  DELETING
} from "../actions/actions.js";

const initialState = {
  friends: [],
  fetching: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetching: true };
    case ERROR:
      return { ...state, error: action.errorMessage };
    case FETCHED:
      return {
        ...state,
        friends: action.friends,
        fetching: false,
        error: null
      };
    case ADDING:
      return { ...state, adding: true };
    case ADDED:
      return {
        ...state,
        friends: action.friends,

        adding: false,
        error: null
      };
    case UPDATING:
      return { ...state, updating: true };
    case UPDATED:
      return {
        ...state,
        friends: action.friends,

        updating: false,
        error: null
      };
    case DELETING:
      return { ...state, deleting: true };
    case DELETED:
      return {
        ...state,
        friends: action.friends,
        deleting: false,
        error: null
      };
    default:
      return state;
  }
};
