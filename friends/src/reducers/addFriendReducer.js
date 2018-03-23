import { FETCHED, ERROR } from '../actions/getFriendsAction';

const initialState = {
  friends: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ERROR:
      return { ...state, error: action.errorMessage };
    case FETCHED:
      return {
        ...state,
        friends: action.friends,
        error: null
      };
    default:
      return state;
  }
};
