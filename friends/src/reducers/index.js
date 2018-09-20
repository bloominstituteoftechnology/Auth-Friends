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

      }
    case FRIENDS_FETCHED:
      return {

      }
    case FRIENDS_SAVED:
      return {

      }
    case SAVING_FRIENDS:
      return {

      }
    case UPDATING_FRIEND:
      return {

      }
    case FRIEND_UPDATED:
      return {

      }
    case DELETING_FRIEND:
      return {

      }
    case FRIEND_DELETED:
      return {

      }
    case FRIENDS:
      return {

      }
    case ERROR:
      return {

     }
     default: return state;
  }
}
