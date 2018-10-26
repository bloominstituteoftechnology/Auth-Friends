import { FETCH_FRIENDS, ADD_FRIEND } from '../actions/types';

export const friendsReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_FRIENDS:
      return action.payload || false;
    case ADD_FRIEND:
      return action.payload || false;
    default:
      return state;
  }
};
