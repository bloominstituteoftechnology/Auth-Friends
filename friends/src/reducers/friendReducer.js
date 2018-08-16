import { FETCHED_A_FRIEND, DONE_WITH_FRIEND, STARTED_EDITING, DONE_EDITING, ERROR } from '../actions';

const initialState = {
  hasLoadedFriend: false,
  isEditing: false,
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
    case STARTED_EDITING:
      return {
        ...state,
        isEditing: true
      }
    case DONE_EDITING:
      return {
        ...state,
        isEditing: false
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
