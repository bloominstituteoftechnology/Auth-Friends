import * as act from "../actions";

const initialState = {
  thisFriend: {},
  canUpdate: false
};

export const soloReducer = (state = initialState, action) => {
  switch (action.type) {
    case act.CAN_UPDATE:
      return { ...state, canUpdate: !state.canUpdate };
    case act.SHOW_FRIEND:
      return { ...state, canUpdate: false, thisFriend: action.payload };
    default:
      return state;
  }
};
