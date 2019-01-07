import {
  GET_FRIENDS_LOADING,
  GET_FRIENDS_SUCCESS,
  GET_FRIENDS_FAILURE,
  GET_FRIEND_LOADING,
  GET_FRIEND_SUCCESS,
  GET_FRIEND_FAILURE,
  ADD_FRIEND_LOADING,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAILURE,
  EDIT_FRIEND_LOADING,
  EDIT_FRIEND_SUCCESS,
  EDIT_FRIEND_FAILURE,
  REMOVE_FRIEND_LOADING,
  REMOVE_FRIEND_SUCCESS,
  REMOVE_FRIEND_FAILURE
} from '../actions';

const initialFriendsState = {
  friends: [],
  friend: {},
  fetchingFriends: false,
  fetchingFriend: false,
  addingFriend: false,
  savingFriendDetails: false,
  removingFriend: false,
  error: null
};

export const rootReducer = (state = initialFriendsState, action) => {
  switch (action.type) {
    // List of Friends
    case GET_FRIENDS_LOADING:
      return {
        ...state,
        fetchingFriends: true,
        fetchingFriend: false,
        addingFriend: false,
        savingFriendDetails: false,
        removingFriend: false
      };
    case GET_FRIENDS_SUCCESS:
      return {
        ...state,
        fetchingFriends: false,
        fetchingFriend: false,
        addingFriend: false,
        savingFriendDetails: false,
        removingFriend: false,
        friends: action.payload
      };
    case GET_FRIENDS_FAILURE:
      return {
        ...state,
        fetchingFriends: false,
        fetchingFriend: false,
        addingFriend: false,
        savingFriendDetails: false,
        removingFriend: false,
        error: action.payload
      };
    // Single Friend
    case GET_FRIEND_LOADING:
      return {
        ...state,
        fetchingFriends: false,
        fetchingFriend: true,
        addingFriend: false,
        savingFriendDetails: false,
        removingFriend: false
      };
    case GET_FRIEND_SUCCESS:
      return {
        ...state,
        fetchingFriends: false,
        fetchingFriend: false,
        addingFriend: false,
        savingFriendDetails: false,
        removingFriend: false,
        friend: action.payload
      };
    case GET_FRIEND_FAILURE:
      return {
        ...state,
        fetchingFriends: false,
        fetchingFriend: false,
        addingFriend: false,
        savingFriendDetails: false,
        removingFriend: false,
        error: action.payload
      };
    // Create Friend
    case ADD_FRIEND_LOADING:
      return {
        ...state,
        fetchingFriends: false,
        fetchingFriend: false,
        addingFriend: true,
        savingFriendDetails: false,
        removingFriend: false
      };
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        fetchingFriends: false,
        fetchingFriend: false,
        addingFriend: false,
        savingFriendDetails: false,
        removingFriend: false
      };
    case ADD_FRIEND_FAILURE:
      return {
        ...state,
        fetchingFriends: false,
        fetchingFriend: false,
        addingFriend: false,
        savingFriendDetails: false,
        removingFriend: false,
        error: action.payload
      };
    // Edit Friend
    case EDIT_FRIEND_LOADING:
      return {
        ...state,
        fetchingFriends: false,
        fetchingFriend: false,
        addingFriend: false,
        savingFriendDetails: true,
        removingFriend: false
      };
    case EDIT_FRIEND_SUCCESS:
      return {
        ...state,
        fetchingFriends: false,
        fetchingFriend: false,
        addingFriend: false,
        savingFriendDetails: false,
        removingFriend: false
      };
    case EDIT_FRIEND_FAILURE:
      return {
        ...state,
        fetchingFriends: false,
        fetchingFriend: false,
        addingFriend: false,
        savingFriendDetails: false,
        removingFriend: false,
        error: action.payload
      };
    // Delete Friend
    case REMOVE_FRIEND_LOADING:
      return {
        ...state,
        fetchingFriends: false,
        fetchingFriend: false,
        addingFriend: false,
        savingFriendDetails: false,
        removingFriend: true
      };
    case REMOVE_FRIEND_SUCCESS:
      return {
        ...state,
        fetchingFriends: false,
        fetchingFriend: false,
        addingFriend: false,
        savingFriendDetails: false,
        removingFriend: false
      };
    case REMOVE_FRIEND_FAILURE:
      return {
        ...state,
        fetchingFriends: false,
        fetchingFriend: false,
        addingFriend: false,
        savingFriendDetails: false,
        removingFriend: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default rootReducer;
