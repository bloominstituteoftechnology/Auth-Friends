import {FETCHING }from '../actions';

const initState = {
  friends: [],
  isFetching: false,
  status: '',
}

export const friendsReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        isFetching: true,
        staus: action.payload
      };
    default:
      return state;
  }
}
