import { FETCHING, FETCHED, ERRORS } from '../actions';

const initialState = { friends: [], fetching: false, error: '' };

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, { fetching: true });

    case FETCHED:
      return Object.assign({}, state, {
        name: action.payload,
        fetching: false
      });

    case ERRORS:
      return Object.assign({}, state, {
        fetching: false,
        error: 'Error fetching friends'
      });

    default:
      return state;
  }
};
