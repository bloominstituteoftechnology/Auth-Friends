import {
  FETCH,
  SUCCESS,
  ERROR,
  ADD_FRIEND,
  ADD_SUCCESS,
  ADD_ERROR
} from '../actions';

const initialState = {
  friends: [],
  error: null,
  fetching: false
}

const friendsReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_FRIEND:
      return {
        ...state,
        friends: action.payload
      };
    case ADD_SUCCESS:
      return{
        ...state,
        error: null,
        friends: action.payload,
      };
    case ADD_ERROR:
      return{
        ...state,
        error: action.payload,
      };
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
