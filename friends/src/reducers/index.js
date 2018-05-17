import { FETCHING_FRIENDS, FETCHED_FRIENDS, ERROR, BEGIN_EDIT, CANCEL_EDIT, BEGIN_ADD, CANCEL_ADD } from '../actions';
const initialState = {
  friends: [],
  fetching: false,
  fetched: false,
  error: null,
  edit: false,
  add: false
};
export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return Object.assign({}, state, {fetching: true});
    case FETCHED_FRIENDS:
      return Object.assign({}, state, {friends: action.payload, fetching: false, fetched: true});
    case ERROR:
      return Object.assign({}, state, {fetching: false, error: action.payload});
    case BEGIN_EDIT:
      return Object.assign({}, state, {edit: true});
    case CANCEL_EDIT:
      return Object.assign({}, state, {edit: false});
    case BEGIN_ADD:
      return Object.assign({}, state, {add: true});
    case CANCEL_ADD:
      return Object.assign({}, state, {add: false});
    default:
      return state;
  }
};

export default friendsReducer;
