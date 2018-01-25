import { 
  FETCH_FRIENDS, 
  FRIENDS_FETCHED, 
  ERROR_FETCHING,
   
} from '../actions';

// create initialState
const initialState = {
  fetchFriends: false,
  friendsFetched: false,
  saveFriends: false,
  updateFriends: false,
  friendUpdated: false,
  deleteFriend: false,
  friendDeleted: false,
  friends: [],
  error: null
}

// create reducer  
// switch, case, return {...state, action}
// action.type
export const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIENDS:
      return {...state, fetchFriends: true};
    case FRIENDS_FETCHED:
      
      return {
        ...state,
        friendsFetched: true,
        fetchFriends: false,
        friends: action.payload
      };
    case ERROR_FETCHING:
      return { ...state, fetchFriends: false, error: action.payload };
    default:
    return state;
  }
}