import { FETCHING_FRIENDS, FETCH_SUCCESS, ERROR_FETCHING } from '../actions';

const initialState = {
  friends: [],
  fetching: false,
  fetched: false,
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

    case ERROR_FETCHING:
      return {
        ...state,
        fetching: false,
        error: "Looks like we encountered an issue."
      }

    default:
      return state;
  }
}