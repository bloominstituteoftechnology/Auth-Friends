import { FETCHING_FRIENDS, FRIENDS_FETCHED, SAVING_FRIEND,
          FRIEND_SAVED, UPDATING_FRIEND, FRIEND_UPDATED, DELETING_FRIEND,
            FRIEND_DELETED, ERROR } from '../actions';

const initialState = {
  isFetchingFriends: false,
  hasFetchedFriends: false,
  hasSavedFriend: false,
  isSavingFriend: false,
  isUpdatingFriend: false,
  hasUpdatedFriend: false,
  isDeletingFriend: false,
  hasDeletedFriend: false,
  friends: [],
  error: null
}

export const friendsReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCHING_FRIENDS:
      return {
        ...state,
        isFetchingFriends: true,
        hasFetchedFriends: false
      }
    case FRIENDS_FETCHED:
      return {
        ...state,
        isFetchingFriends: false,
        hasFetchedFriends: true,
        friends: action.payload
      }
    case SAVING_FRIEND:
      return {
        ...state,
        isSavingFriend: true,
        hasSavedFriend: false
      }
    case FRIEND_SAVED:
      return {
        ...state,
        isSavingFriend: false,
        hasSavedFriend: true,
        friends: action.payload
      }
    case UPDATING_FRIEND:
      return {
        ...state,
        isUpdatingFriend: true,
        hasUpdatedFriend: false
      }
    case FRIEND_UPDATED:
      return {
        ...state,
        isUpdatingFriend: false,
        hasUpdatedFriend: true,
        friends: action.payload
      }
    case DELETING_FRIEND:
      return {
        ...state,
        isDeletingFriend: true,
        hasDeletedFriend: false
      }
    case FRIEND_DELETED:
      return {
        ...state,
        isDeletingFriend: false,
        hasDeletedFriend: true
      }
    case ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}
