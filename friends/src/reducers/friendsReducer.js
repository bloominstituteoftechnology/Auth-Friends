import { FETCHING_FRIENDS, FRIENDS_FETCHED, SAVING_FRIEND,
          FRIEND_SAVED, UPDATING_FRIEND, FRIEND_UPDATED, DELETING_FRIEND,
            FRIEND_DELETED, ERROR } from '../actions';

const initialState = {
  isFetchingFriends: false,
  isSavingFriend: false,
  isUpdatingFriend: false,
  isDeletingFriend: false,
  friends: [],
  error: null
}

export const friendsReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCHING_FRIENDS:
      return {
        ...state,
        isFetchingFriends: true,
      }
    case FRIENDS_FETCHED:
      return {
        ...state,
        isFetchingFriends: false,
        friends: action.payload
      }
    case SAVING_FRIEND:
      return {
        ...state,
        isSavingFriend: true,
      }
    case FRIEND_SAVED:
      return {
        ...state,
        isSavingFriend: false,
        friends: action.payload
      }
    case UPDATING_FRIEND:
      return {
        ...state,
        isUpdatingFriend: true,
      }
    case FRIEND_UPDATED:
      return {
        ...state,
        isUpdatingFriend: false,
        friends: action.payload
      }
    case DELETING_FRIEND:
      return {
        ...state,
        isDeletingFriend: true,
      }
    case FRIEND_DELETED:
      return {
        ...state,
        isDeletingFriend: false,
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
