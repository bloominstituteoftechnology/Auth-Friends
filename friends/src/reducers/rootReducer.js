import {FETCHING_FRIENDS, FETCH_FRIENDS, ERROR, ADDING_FRIEND, ADD_FRIEND} from '../actions/index';

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  addingFriend: false,
  friends: [],
  error: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS: 
      return {...state, fetchingFriends: true}
    case FETCH_FRIENDS: 
      return {...state, friends: action.payload, gettingFriends: false};
    case ADDING_FRIEND:
      return {...state, addingFriend: true};
    case ADD_FRIEND:
      return {...state, addingFriend: false, friends: action.payload};
    default:
      return state;
  }
}

