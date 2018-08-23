import { FETCHING, FETCHED, ERROR } from "../actions";

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  errorFetching: null,
  friends: []
};

export const loadFriends = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING:
    return {...state, fetchingFriends: true }
    case FETCHED:
    return {
      ...state,
      fetchingFriends: false,
      friendsFetched: true,
      friends: action.payload
    }
    case ERROR: {
      return {
      fetchingFriends: false,
      errorFetching: "There was an error fetching the data"
      }
    }
    default: 
    return state;
    }
  }


