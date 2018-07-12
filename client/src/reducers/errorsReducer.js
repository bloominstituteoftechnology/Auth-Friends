import { ERROR } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return null;
  }
};
