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

export default (getFriendsSlice = init, action) => {
  switch (action.type) {
    /*   FETCH FRIENDS REDUCERS  */
    case FETCH_FRIENDS_PENDING:
      return {
        ...getFriendsSlice,
        fetchingFriends: true,
        fetchedFriends: false
      };
    case FETCH_FRIENDS_SUCCESS:
      return {
        ...getFriendsSlice,
        friends: action.payload,
        fetchingFriends: false,
        fetchedFriends: true
      };
    case FETCH_FRIENDS_ERROR:
      return {
        ...getFriendsSlice,
        fetchedError: action.error,
        fetchingFriends: false,
        fetchedFriends: false
      };
    /*   ADD FRIEND REDUCERS  */
    case ADD_FRIEND_PENDING:
      return {
        ...getFriendsSlice,
        addingFriends: true,
        addedFriends: false
      };
    case ADD_FRIEND_SUCCESS:
      return {
        ...getFriendsSlice,
        friends: action.payload,
        addingFriends: false,
        addedFriends: true
      };
    case ADD_FRIEND_ERROR:
      return {
        ...getFriendsSlice,
        fetchedError: action.error,
        addingFriends: false,
        addedFriends: false
      };
    default:
      return getFriendsSlice;
  }
};
