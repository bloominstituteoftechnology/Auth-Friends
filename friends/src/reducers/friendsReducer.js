import * as actionTypes from "../actions";

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  // updatingFriend: false,
  // friendUpdated: false,
  // deletingFriend: false,
  // friendDeleted: false,
  friends: [],
  error: null
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_FRIENDS:
      return { ...state, fetchingFriends: true };
    case actionTypes.FRIENDS_FETCHED:
      return {
        ...state,
        friendsFetched: true,
        fetchingFriends: false,
        friends: action.payload
      };
    case actionTypes.SAVING_FRIEND:
      return { ...state, savingFriends: true };
    case actionTypes.FRIEND_SAVED:
      return {
        ...state,
        friendsSaved: true,
        savingFriends: false,
        friends: action.payload
      };
    case actionTypes.FETCH_ERROR:
      return {
        ...state,
        fetchingFriends: false,
        friendsFetched: false,
        friendsSaved: false,
        savingFriends: false
      };
    default:
      return state;
  }
};
