import { combineReducers } from "redux";
import { FETCHING, SUCCESS, FAILURE } from "../actions";

const initialState = {
  friends: [],
  isFetching: false,
  error: null
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        isFetching: true
      };

    case SUCCESS:
      return {
        ...state,
        error: null,
        isFetching: false,
        friends: action.payload
      };

    case FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default combineReducers({ reducers });
