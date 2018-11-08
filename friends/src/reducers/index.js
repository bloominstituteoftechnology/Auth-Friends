import { SUCCESS, LOADING, ERROR } from '../actions/index';

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [],
  error: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case LOADING:
      return Object.assign({}, state, {fetchingFriends: true})
    case SUCCESS:
      return Object.assign({}, state, {friends: action.friends, fetchingFriends: false, friendsFetched: true})
    case ERROR:
      return Object.assign({}, state, {error: action.error, fetchingFriends: false, friendsFetched: false})
    default:
      return state
  }
}