import {
  FETCHING,
  FETCHED,
  SAVING,
  SAVED,
  UPDATING,
  UPDATED,
  DELETING,
  DELETED,
  ERROR
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
  friends: [],
  error: null
}

/*
fetch -> get
save -> post
update -> put
delete -> delete
*/

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetchingFriends: true }
    case FETCHED:
      return { ...state, friends: action.friends, fetchingFriends: false }
    case SAVING:
      return { ...state, savingFriends: true }
    case SAVED:
      return { ...state, friends: action.friends, savingFriends: false }
    case UPDATING:
      return { ...state, updatingFriend: true }
    case UPDATED:
      return { ...state, friends: action.friends, updatingFriend: false }
    case DELETING:
      return { ...state, deletingFriend: true }
    case DELETED:
      return { ...state, friends: action.friends, deletingFriend: false }
    case ERROR:
      return { ...state, error: action.error }
    default:
      return state
  }
}
