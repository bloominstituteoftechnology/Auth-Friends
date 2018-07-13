import {
  FETCHING_FRIENDS, 
  FETCHED_FRIENDS,
  UPDATE_FRIEND,
} from '../actions';

const initialState = {
  friends: [],
  isFetching: false,
  isFetched: false,
  isAdded: false
}

export const friendsReducer = (state = initialState, action) => {
  console.log('action', action)
  switch (action.type) {
      case FETCHING_FRIENDS:
          return {
              ...state, 
              isFetching: true
          }
      case FETCHED_FRIENDS:
          return {
              ...state,
              isFetching: false,
              isFetched: true,
              friends: action.friends
          }
      case UPDATE_FRIEND:
          return {
              ...state, 
              isFetching: false,
              isFetched: true,
              isAdded: true,
              friends: action.friends 
          }
      default:
          return state
  }
}

