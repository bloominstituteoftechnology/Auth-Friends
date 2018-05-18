import { FETCHING, FETCHED, ERROR, POSTING } from '../actions/actions';

const initialState = {
  friends: [],
  fetching: false,
  fetched: false,
  posting: false,
  error:null
};

const friendsReducer = (state = initialState, action) => {
  switch(action.type) {

  case FETCHING:
    return {...state, fetching: true};


  case FETCHED:
  return {...state, friends: action.payload, fetching: false, fetched: true};

  case POSTING:
    return {...state, posting: true,};
    
  case ERROR:
    return {...state, fetching: false, error: action.payload};
    
  default:
  return state;
  }
};

export default friendsReducer;
