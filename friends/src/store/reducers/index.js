import {
  FETCHING_FRIENDS,
  FETCHING_SUCCESS,
  ERROR_FRIENDS,
  FRIEND_ADD,
  ADD_SUCCESS,
  ADD_ERROR
} from '../actions';

const intitialState = {
  friends: [],
  fetching: false,
  error: null
};

export const friendReducers = (state = intitialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return Object.assign({}, state, { fetching: true });
    case FETCHING_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        friends: action.payload
      });
    case ERROR_FRIENDS:
      return Object.assign({}, state, { error: 'Error' });
    case FRIEND_ADD:
      return Object.assign({}, state, { fetching: true });
    case ADD_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        friends: action.payload
      });
    case ADD_ERROR:
      return Object.assign({}, state, { error: 'Error' });
    default:
      return state;
  }
};
