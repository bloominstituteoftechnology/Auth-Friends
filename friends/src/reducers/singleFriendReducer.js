import * as actionTypes from '../actions';

const initialState = {
  friendSelected: {},
  showUpdate: false
}

export const singleFriendReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SINGLE_FRIEND":
      return { ...state, friendSelected: action.payload, showUpdate: false };
    case "TOGGLE_UPDATE_FRIEND":
      return { ...state, showUpdate: !state.showUpdate };
    default:
      return state;
  }
}

