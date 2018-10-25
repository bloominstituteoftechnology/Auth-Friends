import { FETCHING_FRIENDS, FETCHING_FRIENDS_SUCCESS, FETCHING_FRIENDS_FAILURE } from '../actions';

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: {},
  error: null
};
export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return { ...state, fetchingFriends: true };
    case FETCHING_FRIENDS_SUCCESS:
      console.log(action.payload);
      return { ...state, fetchingFriends: false, friends: action.payload };
    case FETCHING_FRIENDS_FAILURE:
      console.log(action.payload);
      return {
        ...state,
        friends: [...state.friends, ...action.payload],
        fetchingFriends: false,
        error: true
      };
    default:
      return state;
  }
};
