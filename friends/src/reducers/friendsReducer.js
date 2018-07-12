import {
  FETCHING_FRIENDS, 
  FETCHED_FRIENDS,
  SUBMIT_FRIEND,
} from '../actions';

const initialState = {
  friends: [],
  isFetching: false,
  isFetched: false,
}

export const friendsReducer = (state = initialState, {type, friends}) => {
  switch (type) {
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
              friends
          }
      case SUBMIT_FRIEND:
          return {
              ...state, 
              isFetching: false,
              isFetched: true,
              friends 
          }
      default:
          return state
  }
}

