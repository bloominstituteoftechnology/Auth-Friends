import { 
  FETCHING_FRIENDS,
  FRIENDS_FETCHED, 

  FETCHING_FRIEND, 
  FRIEND_FETCHED,

  SAVING_FRIEND, 
  FRIEND_SAVED,

  DELETING_FRIEND,
  FRIEND_DELETED,

  ERROR
} from '../actions';

const initialStateFriends = {
  friends: [],
  
  fetchingFriends: false,
  friendsFetched: false,

  error: null
}

const initialStateFriend = {
  friend: {},

  fetchingFriend: false,
  friendFetched: false,

  savingFriend: false,
  friendSaved: false,

  updatingFriend: false,
  friendUpdated: false,

  deletingFriend: false,
  friendDeleted: false,

  error: null
}

export const friendsReducer = (state = initialStateFriends, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING_FRIENDS:
      return Object.assign({}, state, { 
        fetchingFriends: true, 
        friendsFetched: false

      });
    case FRIENDS_FETCHED:
      return Object.assign({}, state, {
        friends: action.payload,
        fetchingFriends: false,
        friendsFetched: true
      });

    case ERROR:
      return Object.assign( {}, state, { 
        fetchingFriends: false, 
        friendsFetched: false, 
        error: action.payload 
      });
    default:
      return state;
    }
};

export const friendReducer = (state = initialStateFriend, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING_FRIEND:
      return Object.assign({}, state, { 
        fetchingFriend: true, 
        friendFetched: false
      });
    case FRIEND_FETCHED:
      return Object.assign({}, state, {
        friend: action.payload,
        fetchingFriend: false,
        friendFetched: true
      });

    case SAVING_FRIEND:
      return Object.assign({}, state, { 
        fetchingFriend: true, 
        friendFetched: false
      });
    case FRIEND_SAVED:
      return Object.assign({}, state, {
        friend: action.payload,
        savingFriend: false,
        friendSaved: true
      });

    case DELETING_FRIEND:
      return Object.assign({}, state, { 
        deletingFriend: true,
        friendDeleted: false 
      });
    case FRIEND_DELETED:
      return Object.assign({}, state, {
        friends: action.payload,
        deletingFriend: false,
        friendDeleted: true
      });

    case ERROR:
      return Object.assign( {}, state, { 
        fetchingFriend: false, 
        friendFetched: false, 
        error: action.payload 
      });
    default:
      return state;
    }
};


