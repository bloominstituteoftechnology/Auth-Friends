import {
  FETCHING_FRIENDS,
  FETCHING_FRIENDS_SUCCESS,
  FETCHING_FRIENDS_FAILURE,
  ADDING_FRIEND,
  ADDING_FRIEND_SUCCESS,
  ADDING_FRIEND_FAILURE,
} from '../actions';

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  addingFriend: false,
  friendAdded: false,
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
    case FETCHING_FRIENDS_FAILURE:
      return { ...state, error: action.payload };
    case ADDING_FRIEND:
      return { ...state, addingFriend: true, friendAdded: false };
    case ADDING_FRIEND_SUCCESS:
      return {
        ...state,
        friends: [...state.friends, ...action.payload],
        addingFriend: false,
        friendAdded: true,
      };
    case ADDING_FRIEND_FAILURE:
      return { ...state, error: action.payload }
    default:
      return state;
  }
};
