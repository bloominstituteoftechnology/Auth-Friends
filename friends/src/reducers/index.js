import { START_FRIENDS, FRIENDS_SUCCESS, FRIENDS_FAIL } from "../actions";

const initialState = {
  friends: [],
  loading: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FRIENDS:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case FRIENDS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        friends: action.payload,
      };
    case FRIENDS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
