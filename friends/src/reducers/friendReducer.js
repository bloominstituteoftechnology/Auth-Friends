import {
  FETCHING_FRIENDS,
  FRIENDS_FETCHED,
  FETCHING_FRIENDS_FAILURE,
  SAVING_FRIENDS,
  FRIENDS_SAVED,
  UPDATING_FRIEND,
  FRIEND_UPDATED
} from "../actions";

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [],
  error: null
};
export const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return { ...state, fetchingFriends: true };
    case FRIENDS_FETCHED:
      return {
        ...state,
        fetchingFriends: false,
        friendsFetched:true,
        friends: [...state.friends, ...action.payload]
      };
    case FETCHING_STARWAR_FAILURE:
      return { ...state,fetchingFriends: false, error: action.payload };
    default:
      return state;
  }
};
