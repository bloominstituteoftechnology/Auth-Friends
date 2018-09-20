import { FETCHING, FETCHED, ERRORS } from '../actions';

const initialState = { friends: [], fetching: false, error: '' };

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetching: true };

    case FETCHED:
      return {
        ...state,
        friends: action.payload,
        fetching: false
      };

    case ERRORS:
      return {
        ...state,
        fetching: false,
        error: `${action.payload}`
      };

    default:
      return state;
  }
};
