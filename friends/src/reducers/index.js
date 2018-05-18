import { FETCHING_FRIENDS, FETCHED_FRIENDS, ERROR, BEGIN_EDIT, CANCEL_EDIT, BEGIN_ADD, CANCEL_ADD, DELETE_FRIEND, EDIT_FRIEND, ADD_FRIEND } from '../actions';
const initialState = {
  friends: [],
  error: null,
  appState: "default",
  editIndex: null
};
export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return Object.assign({}, state, {appState: "fetching"});
    case FETCHED_FRIENDS:
      return Object.assign({}, state, {friends: action.payload, appState: "fetched"});
    case ERROR:
      return Object.assign({}, state, {appState: "error", error: action.payload});
    case BEGIN_EDIT:
      return Object.assign({}, state, {appState: "edit", editIndex: action.payload});
    case CANCEL_EDIT:
      return Object.assign({}, state, {appState: "fetched", editIndex: null});
    case BEGIN_ADD:
      return Object.assign({}, state, {appState: "add"});
    case CANCEL_ADD:
      return Object.assign({}, state, {appState: "fetched"});
    case DELETE_FRIEND:
      return Object.assign({}, state, {appState: "fetching"});
    case EDIT_FRIEND:
      return Object.assign({}, state, {appState: "fetching"});
    case ADD_FRIEND:
      return Object.assign({}, state, {appState: "fetching"});
    default:
      return state;
  }
};

export default friendsReducer;
