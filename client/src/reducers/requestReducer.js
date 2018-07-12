import {
  MAKING_REQUEST,
  REQUEST_FAILED,
  REQUEST_SUCCESS
} from '../actions/types';

const initialState = {
  requesting: false,
  success: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MAKING_REQUEST:
      return { ...state, requesting: true, success: false };
    case REQUEST_SUCCESS:
      return { ...state, requesting: false, success: true };
    case REQUEST_FAILED:
      return { ...state, requesting: false, success: false };
    default:
      return state;
  }
};
