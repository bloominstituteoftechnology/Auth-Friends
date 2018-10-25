import { SUCCESS, FAILURE } from '../actions';

const initialState = [];

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS:
      return action.payload;
    case FAILURE:
      return action.payload;
    default:
      return state;
  }
};
