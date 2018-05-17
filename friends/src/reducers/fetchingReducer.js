import {FETCHING_FRIENDS, FETCHED_FRIENDS, ERROR} from '../actionCreators/fetchingFriends.js';

const initialState = {
  fetchingFriends: false,
  fetchedFriends: false,
  savingFriends: false,
  savedFriends: false,
  updatingFriends: false,
  updatedFriends: false,
  deletingFriend: false,
  deletedFriend: false,
  friends: [],
  error: null,
}

export const fetchingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return Object.assign({}, state, {
        fetchingFriends: true,
      })
    case FETCHED_FRIENDS:
      return Object.assign({}, state, {
        friends: state.friends.concat(action.payload),
        fetchingFriends: false,
        fetchedFriends: true,
      })
    case ERROR:
      return Object.assign({}, state, {
        fetchingFriends: false,
        error: action.payload,
      })
    default:
      return state;
  }
}