import {
  FETCHING,
  FETCHED,
  ERROR,
  DELETE_FRIEND,
  DELETE_FRIEND_SUCCESS,
  DELETE_FRIEND_FAILURE,
  POST_FRIEND,
  POST_FRIEND_SUCCESS,
  POST_FRIEND_FAILURE
} from "../Actions";
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

    case DELETE_FRIEND:
      return {
        ...state,
        deletingFriend: true
      };
    case DELETE_FRIEND_SUCCESS:
      return {
        ...state,
        deletingFriend: false,
        friends: [...action.payload]
      };
    case DELETE_FRIEND_FAILURE:
      return {
        ...state,
        deletingFriend: false,
        error: action.payload
      };

    case POST_FRIEND:
      return {
        ...state,
        savingFriends: true
      };
    case POST_FRIEND_SUCCESS:
      return {
        ...state,
        savingFriends: false,
        friends: [...action.payload]
      };
    case POST_FRIEND_FAILURE:
      return {
        ...state,
        savingFriends: false,
        error: action.payload
      };
    default:
      return state;
  }
};
