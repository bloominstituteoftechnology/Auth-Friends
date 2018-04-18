import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR
} from '../actions'

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  currentFriend: null,
  friends: [],
  error: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_START:
      return Object.assign({}, state, { fetchingFriends: true, friendsFetched: false })
    case FETCH_SUCCESS:
      return Object.assign({}, state, { friends: payload, fetchingFriends: false, friendsFetched: true })
    case FETCH_ERROR:
      return Object.assign({}, state, { error: payload, fetchingFriends: false, friendsFetched: false })
    default:
      return state  
  }
}