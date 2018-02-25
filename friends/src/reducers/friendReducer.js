import * as actionTypes from "../actions/actions";

const initialState = {
  friendSelected: {},
  showUpdate: false
};

export const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
