import {
  GET_FRIENDS,
  POST_FRIEND,
  PUT_FRIEND,
  SUCCESS,
  ERROR,
} from '../actions';

const initialState = {
  friends: [],
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIENDS:
    case POST_FRIEND:
    case PUT_FRIEND:
      return Object.assign({}, state, { loading: true });
    case SUCCESS:
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
