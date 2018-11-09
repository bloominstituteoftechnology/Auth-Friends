import { FETCHING, SUCCESS, FAILURE } from '../actions/actions';

const initialState = {
  friends: [],
  error: '',
  fetching: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetching: true };
    case SUCCESS:
      return { ...state, fetching: false, friends: action.payload };
    default:
      return state;
  }
};
