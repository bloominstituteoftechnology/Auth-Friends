import { ADD_FRIEND, DELETE_FRIEND, EDIT_FRIEND } from '../actions/actions.js';

export const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FRIEND:
      return [...state, action.payload];
    
    case DELETE_FRIEND:
      return state.filter(friendsList => {
        return friendsList.id !== action.id;
      });
      default:
        return state;

    case EDIT_FRIEND:
      return
  }
};
