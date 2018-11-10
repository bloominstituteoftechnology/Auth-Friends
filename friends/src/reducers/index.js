import { LOADING, SUCCESS, ERROR } from '../actions';

const initialState = {
  friends: [],
  error: '',
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return Object.assign({}, state, {loading: true})
    case SUCCESS:
    return Object.assign({}, state, {friends: action.friends, loading: false, error: ''})
    case ERROR:
    return Object.assign({}, state, {error: action.message, loading: false})
    default:
      return state;
  }
};