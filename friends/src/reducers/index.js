// import { combineReducers } from 'redux';
import { 
  FETCHING_FRIENDS, FETCH_SUCCESS, FETCH_NEW_FRIEND, ERROR_FETCHING, 
  SAVING_FRIEND, SAVE_SUCCESS, ERROR_SAVING, 
  DESTROY_FRIEND, DESTROY_ERROR
} from '../actions';

const initialState = {
  friends: [],
  fetching: false,
  fetched: false,
  saving: false,
  saved: false,
  error: ""
}

export const reducer = (state = initialState, action ) => {
  switch(action.type) {
    case FETCHING_FRIENDS:
      return { ...state, fetching: true };

    case FETCH_SUCCESS:
      return {
        ...state, 
        friends: [...state.friends, ...action.payload],
        fetching: false,
        fetched: true
      }

    case FETCH_NEW_FRIEND:
      return {
        ...state,
        friends: [...action.payload],
        fetching: false,
        fetched: true
      }

    case ERROR_FETCHING:
      return {
        ...state,
        fetching: false,
        error: "Looks like we encountered an issue fetching your friends."
      }
/******************************************************************************************************/
    case SAVING_FRIEND:
      return { ...state, saving: true };

    case SAVE_SUCCESS:
      return {
        ...state,
        friends: [...action.payload],
        saving: false,
        saved: true
      }

    case ERROR_SAVING:
      return {
        ...state,
        saving: false,
        error: "We're having trouble saving!"
      }
/******************************************************************************************************/
    case DESTROY_FRIEND:
      return {
        ...state,
        friends: [...action.payload]
      }

    case DESTROY_ERROR:
      return { 
        ...state, 
        error: "Darn! We can delete that friend." 
      }
/******************************************************************************************************/
    default:
      return state;
  }
}