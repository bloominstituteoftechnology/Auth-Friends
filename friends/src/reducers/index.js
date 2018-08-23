import { PENDING_FRIENDS, SUCCESS_FRIENDS, ERROR_FRIENDS } from "../actions";

const initialState = {
  pending: false,
  friends: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PENDING_FRIENDS:
      return {
        ...state,
        pending: true
      };
    case SUCCESS_FRIENDS:
      return {
        ...state,
        pending: false,
        friends: [...action.payload]
      };
    case ERROR_FRIENDS:
      return {
        ...state,
        pending: false,
        error: action.payload
      };
    default:
      return state;
  }
};
