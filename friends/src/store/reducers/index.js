import { FETCH, SUCCESS, ERROR } from '../actions';

const initialState = {
  friends: [],
  error: null
}

const friendsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH:
      return {
        ...state
      };
    case SUCCESS:
      return{
        ...state,
        error: null,
        friends: action.payload,
      };
    case ERROR:
      return{
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default friendsReducer;
