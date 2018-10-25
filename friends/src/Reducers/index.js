import { FETCHING, FETCHED, ERROR } from "../actions";
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
export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetchingFriends: true };
    case FETCHED:
      return {
        ...state,
        fetchingFriends: false,
        friends: [...state.friends, ...action.payload]
      };
    case ERROR:
      return {
        ...state,
        fetchingFriends: false,
        error: action.payload
      };
    default:
      return state;
  }
};
