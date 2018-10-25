import {
  FRIENDS_FETCH_SUCCESS,
  FRIENDS_FETCH_FAILURE,
  ADD_FRIEND,
  DELETE_FRIEND
} from '../actions';

const initialState = [];

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FRIENDS_FETCH_SUCCESS:
      return action.payload;
    case FRIENDS_FETCH_FAILURE:
      return action.payload;
    case ADD_FRIEND:
      return action.payload;
    case DELETE_FRIEND:
      return action.payload;
    default:
      return state;
  }
};
