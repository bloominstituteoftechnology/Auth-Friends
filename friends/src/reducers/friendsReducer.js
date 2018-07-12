import {FETCHING, FETCHED, ERROR, SAVING, SAVED} from '../actions';
const initialState = {
  friends: [],
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  error: null
}

export const friendsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING:
      return Object.assign({}, state, {fetchingFriends: true})
    case FETCHED:
      return Object.assign({}, state, {fetchingFriends: false, friendsFetched: true, friends: action.payload})
    case ERROR:
      return Object.assign({}, state, {fetchingFriends: false, error: action.payload})
    case SAVING:
      return Object.assign({}, state, {savingFriends: true})
    case SAVED:
      console.log("SAVED CASE Action payload", action.payload)
      return Object.assign({}, state, {friendsSaved: true, savingFriends: false, friends: action.payload})
    default:
      return state;
  }
};
