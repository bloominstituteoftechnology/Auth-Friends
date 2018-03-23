import { FETCHING_FRIENDS, FETCHED_FRIENDS, ADDING_FRIENDS, ADDED_FRIENDS, ERROR } from '../actions';

const initialState = {
  friends: [],
  fetchingFriends: false,
  fetchedFriends: false,
  addingFriends: false,
  addedFriends: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    
    case FETCHING_FRIENDS:
      return {
        ...state,
        fetchingFriends: true,
        fetchedFriends: false
      }
    case FETCHED_FRIENDS:
      return {
        ...state,
        fetchingFriends: false,
        fetchedFriends: true,
        friends: action.friends,
        error: null
      }

    case ADDING_FRIENDS:
      return {
        ...state,
        addingFriends: true,
        addedFriends: false
      }
    case ADDED_FRIENDS:
      return {
        ...state,
        addingFriends: false,
        addedFriends: true,
        friends: action.friends,
        error: null
      }

    case ERROR:
      return {
        ...state,
        error: action.errorMessage
      }

    default: return state
  }
}