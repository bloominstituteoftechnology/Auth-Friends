import { FETCHING, FETCHED, ERROR } from '../actions/actions';

const initialState = {
  friends: [],
  fetching: false,
  fetched: false,
  error:null
};

export const friendsReducer = (state = initialState, action) => {
  switch(action.type) {

  case FETCHING:
    return {...state, pending: true};

  case FETCHED:
  return {...state, friends: action.payload};

  case ERROR:
    return state;
    
  default:
  return state;
  }
};

//I set this up like my Smurfs Sprint Challenge from today.
