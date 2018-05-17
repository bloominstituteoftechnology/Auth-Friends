import { 
  FETCHING_FRIENDS, 
  FRIENDS_FETCHED, 
  FRIENDS_SAVED, 
  SAVING_FRIENDS, 
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


    case ERROR:
      return Object.assign({}, state, { error: action.payload })
       
    default:
      return state;
  }
}