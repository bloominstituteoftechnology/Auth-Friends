import { FETCHING_FRIENDS, FETCHING_FRIENDS_SUCCESS } from '../actions';

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  savingFriend: false,
  friendSaved: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [],
  error: null,
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return { ...state, fetchingFriends: true };
    case FETCHING_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: [...state.friends, ...action.payload],
        fetchingFriends: false,
        friendsFetched: true,
      };
    default:
      return state;
  }
};

