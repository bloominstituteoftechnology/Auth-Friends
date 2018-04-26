/* we need our action types here*/ 
import { FETCHING, ERROR, FETCHED } from '../actions';


  // define a few properties here. (Array friends, Boolean fetching, Boolean fetched, null error.)
const initialState = {fetching: false, error: '', friends: []};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers.  Action types should be `FETCHING`, `FETCHED`, and `ERROR`  Your switch statement should handle all of these cases.

    case FETCHING:
      return Object.assign({}, state, { fetching: true });

    case FETCHED: 
      return Object.assign({}, state, { fetching: false, friends: state.friends.concat(action.friends)});
  
    case ERROR:
      return Object.assign({}, state, { fetching: false, error: action.error });

    default:
      return state;
  }
};

