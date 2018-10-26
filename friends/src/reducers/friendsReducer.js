import { 
  FETCHING_FRIENDS, FETCHING_FRIENDS_SUCCESS, FETCHING_FRIENDS_FAILURE,
  POSTING_FRIEND, POSTING_FRIEND_FAILURE
} from '../actions';

const initialState = {
  // supplied by Readme.md
  gettingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [],
  error: null
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return { ...state, gettingFriends: true };
    case FETCHING_FRIENDS_SUCCESS:
      return {
        ...state,
        gettingFriends: false,
        friends: [...state.friends, ...action.payload]
      };
    case FETCHING_FRIENDS_FAILURE:
      return {
        ...state,
        gettingFriends: false,
        error: action.payload
      };
    case POSTING_FRIEND:
      return {
        ...state,
        savingFriends: true        
      };
    case POSTING_FRIEND_FAILURE:
      return {
        ...state,
        savingFriends: false,
        error: action.payload
      }
    default:
      return state;
  }
};

