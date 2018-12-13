import * as actionTypes from '../actions';

const initState = {
  friendSelected: {},
  displayUpdate: true
};

export const singleFriendReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SINGLE_FRIEND:
      return { ...state, friendSelected: action.payload, displayUpdate: true };
    case actionTypes.TOGGLE_UPDATE_FRIEND:
      return { ...state, displayUpdate: !state.displayUpdate };
    default:
      return state;
  }
};