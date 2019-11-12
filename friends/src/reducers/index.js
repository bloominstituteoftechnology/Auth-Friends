
import { FETCH_FRIENDS_LOADING, FETCH_FRIENDS_SUCCESS, FETCH_FRIENDS_FAILED, LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAILED } from '../actions';

export const initialState = {
  token: '',
  friends: [],
  isLoggedIn: sessionStorage.getItem( 'token' ) ? true : false,
  error: null,
  isFetching: false
};

export const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case LOGIN_LOADING:
      return {
        ...state,
        isFetching: false,
        error: null
      }
    case LOGIN_SUCCESS:
      sessionStorage.setItem( 'token', action.payload );
      return {
        ...state,
        token: action.payload,        
        isLoggedIn: true,
        isFetching: false,
        error: null
      }
    case LOGIN_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
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