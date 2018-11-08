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
  friends: [
    {
      id: 1,
      name: 'Joe',
      age: 24,
      email: 'joe@lambdaschool.com'
    }
  ],
  error: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SUCCESS:
      return Object.assign({}, state, {friends: action.friends})
    case ERROR:
      return Object.assign({}, state, {error: action.error})
    default:
      return state
  }
}