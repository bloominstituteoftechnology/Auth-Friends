import {
  FETCH_FRIEND_ID,
  FETCH_FRIEND_ID_SUCCESS,
  FETCH_FRIEND_ID_FAILURE,
} from '../actions';

const initialFriendState = {
  friend: null,
  error: null,
}

export const friendReducer = (state = initialFriendState, action) => {
  switch (action.type) {

    case FETCH_FRIEND_ID:
      return {
        state
      }

    case FETCH_FRIEND_ID_SUCCESS:
      return {
        ...state,
        friend: action.payload,

      }

    case FETCH_FRIEND_ID_FAILURE:
      return {
        ...state,
        error: action.payload,

      }

    default:
      return state;
  }
}
