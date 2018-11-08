import { LOADING, FETCHED_FRIENDS, ERROR } from '../actions';

const initialState = {
  friends: [],
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return Object.assign({}, state, { loading: true });
    case FETCHED_FRIENDS:
      return Object.assign({}, state, {
        friends: action.friends,
        loading: false,
        error: null,
      });
    case ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
      });
    default:
      return state;
  }
};
