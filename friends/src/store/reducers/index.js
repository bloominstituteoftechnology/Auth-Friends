import { FETCH, SUCCESS, ERROR } from '../actions';

const initialState = {
  friends: [],
  error: null,
  fetching: false
}

const friendsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH:
      return {
        ...state,
        fetching: true
      };
    case SUCCESS:
      return{
        ...state,
        error: null,
        friends: action.payload,
        fetching: false
      };
    case ERROR:
      return{
        ...state,
        error: action.payload,
        fetching: false
      };
    default:
      return state;
  }
}

export default friendsReducer;
