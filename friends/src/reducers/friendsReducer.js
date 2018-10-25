import {
  FETCHING_FRIENDS,
  FETCHING_FRIENDS_SUCCESS,
  FETCHING_FRIENDS_FAILED,
  ADD_FRIEND,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAILED
} from "../actions";

const initialState = {
  friendsList: [],
  isFetching: false,
  addingFriend: false,
  friendAdded: false
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return { ...state, isFetching: true };
    case FETCHING_FRIENDS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        friendsList: [...state.friendsList, ...action.payload]
      };
    case FETCHING_FRIENDS_FAILED:
      return { ...state, isFetching: false, error: action.payload };
    case ADD_FRIEND:
      return { ...state, addingFriend: true };
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        addingFriend: false,
        friendAdded: true,
        friendsList: action.payload
      };
    default:
      return state;
  }
};
