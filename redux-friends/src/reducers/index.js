import {
  FETCHING_FRIENDS,
  FETCHING_FRIENDS_SUCCESS,
  FETCHING_FRIENDS_FAILURE,
  ADD_NEW_FRIEND
} from '../actions';

const initalState = { friends: [], isFetching: false, error: null };

export const friendReducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return {
        ...state,
        isFetching: true
      };
    case FETCHING_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: [...action.payload],
        isFetching: false
      };
    case FETCHING_FRIENDS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    case ADD_NEW_FRIEND:
      return {
        ...state,
        friends: [...action.payload]
      };
    default:
      return state;
  }
};
