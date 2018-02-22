import { 
  IS_FETCHING,
  FRIENDS_FETCHED,
  ERROR_FETCHING_FRIENDS,
  ADD_FRIEND
 } from '../actions'

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  // friendsSaved: false,
  // savingFriends: false,
  // updatingFriend: false,
  // friendUpdated: false,
  // deletingFriend: false,
  // friendDeleted: false,
  friends: [],
  error: null
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case IS_FETCHING:
      return { 
        ...state, 
        fetchingFriends: true,
      };
    case FRIENDS_FETCHED:
      return { 
        ...state, 
        fetchingFriends: false, 
        friendsFetched:true,
        friends: action.payload,
      };
    case ERROR_FETCHING_FRIENDS:
      return { 
        ...state, 
        fetchingFriends: false,
        error: action.payload, 
      };
    case ADD_FRIEND:
      return {}
  }
}