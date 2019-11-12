
import { FETCH_FRIENDS_LOADING, FETCH_FRIENDS_SUCCESS, FETCH_FRIENDS_FAILED } from '../actions';

export const initialState = {
  friends: [],
  error: null,
  isFetching: false
};

export const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case FETCH_FRIENDS_LOADING:
      return {
        ...state,
        isFetching: true,
        error: null
      }
    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        isFetching: false,
        error: null
      }
    case FETCH_FRIENDS_FAILED:
      return {
        ...state,
        friends: [],
        isFetching: false,
        error: action.payload
      }
    default: return state;
  }
};