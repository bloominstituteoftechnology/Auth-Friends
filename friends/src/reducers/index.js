import {
  FETCHING_FRIENDS,
  FRIEND_FETCH_SUCCESS,
  FRIEND_FETCH_FAILURE,
} from '../actions';
const initialState = {
  friends: [],
  fetching: false,
  error: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return {
        ...state,
        fetching: true,
      };
    case FRIEND_FETCH_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        fetching: false,
      };
    case FRIEND_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetching: false,
      };
    default:
      return state;
  }
};
