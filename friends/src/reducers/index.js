import {FETCHING, SUCCESS, FAILURE} from "../actions";

const initialState = {
  friends: [],
  isFetching: false,
  error: null
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {...state, isFetching: true};
    case SUCCESS:
      return {...state, friends: [...action.payload], isFetching: false};
    case FAILURE:
      return {...state, error: action.payload, isFetching: false};
    default:
      return state;
  }
};
