//reducer

import {FETCHING, FETCHED, ERROR } from '../actions';

const initState = {
  friends: [],
  isFetching: false,
  isFetched: false,
  status: '',
  count: null,
}

export const friendsReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        isFetching: true,
        status: action.payload
      };
    case FETCHED:
      return Object.assign({}, state, {
        isFetched: true,
        isFetching: false,
        friends: action.payload.friends,
        status: action.payload.status,
        count: action.payload.friends.length
      });
    case ERROR:
      return {
        status: action.payload
      }
    default:
      return state;
  }
}
