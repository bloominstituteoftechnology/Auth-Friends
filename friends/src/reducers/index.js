import {
  FETCHING_FRIENDS,
  FRIENDS_FETCHED,
  FRIENDS_SAVED,
  SAVING_FRIENDS,
  UPDATING_FRIEND,
  FRIEND_UPDATED,
  DELETING_FRIEND,
  FRIEND_DELETED,
  FRIENDS,
  ERROR
} from '../actions'

const initState = {
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

export const friendsReducer = (state = initState, action) => {
  switch(action.type) {
    case FETCHING_FRIENDS:
      return {
        ...state,
        fetchingFriends: true
      }
    case FRIENDS_FETCHED:
      return {
        ...state,
        fetchingFriends: false,
        friends: state.friends.concat(action.payload),
        friendsFetched: true
      }
    case FRIENDS_SAVED:
      return {
        ...state

      }
    case SAVING_FRIENDS:
      return {
        ...state

      }
    case UPDATING_FRIEND:
      return {
        ...state

      }
    case FRIEND_UPDATED:
      return {
        ...state

      }
    case DELETING_FRIEND:
      return {
        ...state

      }
    case FRIEND_DELETED:
      return {
        ...state

      }
    case FRIENDS:
      return {
        ...state

      }
    case ERROR:
      return {
        ...state,
        fetchingFriends: false,
        error: action.payload
     }
     default: return state;
  }
}
