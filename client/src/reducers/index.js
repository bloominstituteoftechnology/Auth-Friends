import {
  FETCH_START,
  MULTI_FETCH_SUCCESS,
  SINGLE_FETCH_SUCCESS,
  FETCH_ERROR,
  UPDATING_FRIEND,
  UPDATED_FRIEND,
  CANCEL_UPDATE
} from '../actions'

const initialState = {
  fetchingFriends: false,
  friendsSaved: false,
  savingFriends: false,
  friendsFetched: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  selectedFriend: null,
  friends: [],
  error: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_START:
      return Object.assign({}, state, { fetchingFriends: true, friendsFetched: false })
    case MULTI_FETCH_SUCCESS:
      return Object.assign({}, state, { friends: payload, fetchingFriends: false, friendsFetched: true })
    case SINGLE_FETCH_SUCCESS:
      return Object.assign({}, state, { selectedFriend: payload }) 
    case FETCH_ERROR:
      return Object.assign({}, state, { error: payload, fetchingFriends: false, friendsFetched: false })
    case UPDATING_FRIEND:
      return Object.assign({}, state, { friendUpdated: false, updatingFriend: true })
    case UPDATED_FRIEND:
      return Object.assign({}, state, { friendUpdated: true, updatingFriend: false, selectedFriend: null })  
    case CANCEL_UPDATE:
      return Object.assign({}, state, { updatingFriend: false, selectedFriend: null })  
    default:
      return state
  }
}