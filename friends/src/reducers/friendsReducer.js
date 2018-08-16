//reducer

import {FETCHING,FETCHED, ERROR }from '../actions';

const initState = {
  friends: [],
  isFetching: false,
  isFetched: false,
  status: '',
}

export const friendsReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        isFetching: true,
        status: action.payload
      };
    case FETCHED:
      return {
        isFetched: true,
        isFetching: false,
        friends: action.payload.friends,
        status: action.payload.status
      }
      case ERROR:
      return {
        status: action.payload
      }
    default:
      return state;
  }
}
