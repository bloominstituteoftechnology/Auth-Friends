import { FETCHING, FETCHED, ERROR} from '../actions';

const initialState = {
  friends: [],
  fetching: false,
  fetched: false,
  error: null
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHED:
      return Object.assign({}, state, {
        chars: action.payload,
        fetched: true,
        fetching: false
      });
    case FETCHING:
      return Object.assign({}, state, { fetching: true });
    case ERROR:
      return Object.assign( {}, state, { fetched: false, fetching: false, error: action.payload } );
    default:
      return state;
    }
};

