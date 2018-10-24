import { FETCH_DATA, FETCH_ERROR } from '../actions';

const initialState = {
  friends: [],
  fetching: true,
  err: 'errdude'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        friends: action.payload,
        fetching: false
      };
    case FETCH_ERROR:
      return {
        ...state,
        err: action.payload
      };
    default:
      return state;
  }
};
