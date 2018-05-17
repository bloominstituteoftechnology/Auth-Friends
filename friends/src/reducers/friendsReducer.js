import { 
  FETCHING_FRIENDS, 
  FRIENDS_FETCHED, 
  FRIENDS_SAVED, 
  SAVING_FRIENDS,
  DELETING_FRIEND,
  FRIEND_DELETED, 
  GOODBYE_HAPPINESS,
  ERROR 
} from "../actions";

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
export const friendsReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return Object.assign({}, state, { fetchingFriends: true });
    case FRIENDS_FETCHED:
      return Object.assign({}, state, {
        friends: action.payload,
        fetchingFriends: false,
        friendsFetched: true,
      })
    
    case SAVING_FRIENDS:
      return Object.assign({}, state, { savingFriends: true })
    case FRIENDS_SAVED:
      return Object.assign({}, state, { 
        friends: action.payload,
        savingFriends: false,
      })

    case DELETING_FRIEND:
      return Object.assign({}, state, { deletingFriend: true })
    case FRIEND_DELETED:
      return Object.assign({}, state, {
        friends: action.payload,
        deletingFriend: false,
        friendDeleted: true,
      })
    case GOODBYE_HAPPINESS:
      return Object.assign({}, state, {friendDeleted: false })


    case ERROR:
      return Object.assign({}, state, { error: action.payload })
       
    default:
      return state;
  }
}