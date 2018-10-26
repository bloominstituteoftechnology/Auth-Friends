import {
  FETCHING_FRIENDS,
  FETCHING_FRIENDS_SUCCESS,
  FETCHING_FRIENDS_FAILURE,
  ADD_FRIEND,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAILURE,
  DELETE_FRIEND,
  DELETE_FRIEND_SUCCESS,
  DELETE_FRIEND_FAILURE,
  UPDATE_FRIEND,
  UPDATE_FRIEND_SUCCESS,
  UPDATE_FRIEND_FAILURE
} from "../actions";

const initialState = {
  friends: [],
  fetchingFriends: false,
  friendsFetched: false,
  friendAdded: false,
  addingFriend: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  error: null
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    //rendering friends list

    case FETCHING_FRIENDS:
      return {
        ...state,
        fetchingFriends: true
      };
    case FETCHING_FRIENDS_SUCCESS:
      return {
        ...state,
        fetchingFriends: false,
        friends: action.payload
      };
    case FETCHING_FRIENDS_FAILURE:
      return {
        ...state,
        fetchingFriends: false,
        error: action.payload
      };

    //adding friends
    case ADD_FRIEND:
      return {
        ...state,
        addingFriend: true
      };
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        friendAdded: true,
        addingFriend: false,
        friends: [...action.payload]
      };
    case ADD_FRIEND_FAILURE:
      return {
        ...state,
        addingFriend: false,
        friendAdded: false,
        error: action.payload
      };

    // deleting friends
    case DELETE_FRIEND:
      return {
        ...state,
        deletingFriend: true
      };
    case DELETE_FRIEND_SUCCESS:
      return {
        ...state,
        friendDeleted: true,
        deletingFriend: false,
        friends: [...action.payload]
      };
    case DELETE_FRIEND_FAILURE:
      return {
        ...state,
        deletingFriend: false,
        friendDeleted: false,
        error: action.payload
      };

    // Updating Friends
    case UPDATE_FRIEND:
      return {
        ...state,
        updatingFriend: true
      };
    case UPDATE_FRIEND_SUCCESS:
      return {
        ...state,
        friendUpdated: true,
        updatingFriend: false,
        friends: [...state.friends, ...action.payload]
      };
    case UPDATE_FRIEND_FAILURE:
      return {
        ...state,
        updatingFriend: false,
        friendUpdated: false,
        error: action.payload
      };

    default:
      return state;
  }
};
