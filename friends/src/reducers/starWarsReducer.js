import { FETCHING_DATA, ON_DATA_FETCHED, ON_DATA_ERROR } from '../actions';

const initialState = {
  chars: [],
  fetching: false,
  fetched: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return Object.assign({}, state, { fetching: true });
    case ON_DATA_FETCHED:
      return Object.assign({}, state, { 
        chars: action.payload.results,
        fetching: false,
        fetched: true
      });
    case ON_DATA_ERROR:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
};