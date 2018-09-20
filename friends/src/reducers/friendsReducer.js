import { FETCHING, FETCHED, FRIEND_FETCHED, ERRORS } from '../actions';

const initialState = { friends: [], friend: {}, fetching: false, error: '' };

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

    case FRIEND_FETCHED:
      return {
        ...state,
        friend: action.payload,
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
