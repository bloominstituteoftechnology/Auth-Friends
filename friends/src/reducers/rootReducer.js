import {FETCHING_FRIENDS, FETCH_FRIENDS, ERROR} from '../actions/index';

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  friends: [],
  error: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS: 
      return {...state, fetchingFriends: true}
    case FETCH_FRIENDS: 
    return {...state, friends: action.payload, gettingFriends: false};
    case ERROR:
    
    default:
      return state;
  }
}

