import * as act from "../actions";

const initialState = {
  thisFriend: {},
  canUpdate: false,
  singleFetching: false,
  error: null
};

export const soloReducer = (state = initialState, action) => {
  switch (action.type) {
    case act.CAN_UPDATE:
      return { ...state, canUpdate: !state.canUpdate };
    case act.SINGLE_FETCHING:
      return { ...state, singleFetching: true };
    case act.SINGLE_FETCHED:
      return { ...state, singleFetching: false, thisFriend: action.payload };
    case act.ERROR:
      return {
        ...state,
        singleFetching: false,
        canUpdate: false,
        error: action.payload
      };
    default:
      return state;
  }
};
