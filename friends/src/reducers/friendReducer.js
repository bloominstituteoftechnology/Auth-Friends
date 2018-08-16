import { } from '../actions';

const initialState = {
  hasLoadedFriend: false,
  friend: null,
  error: null,
}

export const friendReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCHED_A_FRIEND:
      return {
        ...state,
        friend: action.payload,
        hasLoadedFriend: true
      }
    case DONE_WITH_FRIEND:
      return {
        ...state,
        friend: null,
        hasLoadedFriend: false
      }
    case ERROR:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state;
  }
}
