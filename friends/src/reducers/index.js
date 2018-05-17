import { FETCHING_FRIENDS, FETCHED_FRIENDS, ERROR } from '../actions';
const initialState = {
  friends: [],
  fetching: false,
  fetched: false,
  error: null
};
export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return Object.assign({}, state, {fetching: true});
    case FETCHED_FRIENDS:
      return Object.assign({}, state, {friends: action.payload, fetching: false, fetched: true});
    case ERROR:
      return Object.assign({}, state, {fetching: false, error: action.payload});
    default:
      return state;
  }
};

export default friendsReducer;
