import {
  FETCH_FRIENDS_PENDING,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_ERROR
} from "../actions/getFriendsAction";
import {
  ADD_FRIEND_PENDING,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_ERROR
} from "../actions/addFriendAction";
import {
  REMOVE_FRIEND_PENDING,
  REMOVE_FRIEND_SUCCESS,
  REMOVE_FRIEND_ERROR
} from "../actions/removeFriendAction";

const init = {
  friends: [],
  fetchingFriends: false,
  fetchedFriends: false,
  fetchedError: null,
  updatingFriend: false,
  updatedFriend: false,
  updateError: null,
  removingFriend: false,
  removedFriend: false,
  removeError: null,
  addingFriend: false,
  addedFriend: false,
  addError: null
};

export default (state = init, action) => {
  switch (action.type) {
    /*   FETCH FRIENDS REDUCERS  */
    case FETCH_FRIENDS_PENDING:
      return {
        ...state,
        fetchingFriends: true,
        fetchedFriends: false
      };
    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        fetchingFriends: false,
        fetchedFriends: true
      };
    case FETCH_FRIENDS_ERROR:
      return {
        ...state,
        fetchedError: action.error,
        fetchingFriends: false,
        fetchedFriends: false
      };
    /*   ADD FRIEND REDUCERS  */
    case ADD_FRIEND_PENDING:
      return {
        ...state,
        addingFriends: true,
        addedFriends: false
      };
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        addingFriends: false,
        addedFriends: true
      };
    case ADD_FRIEND_ERROR:
      return {
        ...state,
        addError: action.error,
        addingFriends: false,
        addedFriends: false
      };

    case REMOVE_FRIEND_PENDING:
      return {
        ...state,
        removingFriend: true,
        removedFriend: false
      };
    case REMOVE_FRIEND_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        removingFriend: false,
        removedFriend: true
      };
    case REMOVE_FRIEND_ERROR:
      return {
        ...state,
        removedError: action.error,
        removingFriend: false,
        removedFriend: false
      };
    default:
      return state;
  }
};
