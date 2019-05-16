import { FETCHING, SUCCESS, FAILURE } from '../actions';

const initialState = {
  friends: [],
  isLoading: false,
  error: ''
};

export const getFriends = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        friends: action.payload
      };
    case FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
