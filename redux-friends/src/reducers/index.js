import {
  FETCHING_FRIENDS,
  FETCHING_FRIENDS_SUCCESS,
  FETCHING_FRIENDS_FAILURE,
  FETCH_FRIEND,
  FETCH_FRIEND_SUCCESS,
  FETCH_FRIEND_FAILURE,
  ADD_NEW_FRIEND,
  ADD_NEW_FRIEND_SUCCESS,
  ADD_NEW_FRIEND_FAILURE,
  UPDATE_FRIEND,
  UPDATE_FRIEND_SUCCESS,
  UPDATE_FRIEND_FAILURE,
  DELETE_FRIEND,
  DELETE_FRIEND_SUCCESS,
  DELETE_FRIEND_FAILURE
} from '../actions';

const initalState = {
  friends: [],
  isFetching: false,
  isFetchingFriend: false,
  isAddingNewFriend: false,
  isUpdatingFriend: false,
  isDeletingFriend: false,
  error: null
};

export const friendReducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return {
        ...state,
        isFetching: true
      };
    case FETCHING_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: [...action.payload],
        isFetching: false
      };
    case FETCHING_FRIENDS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    case FETCH_FRIEND:
      return {
        ...state,
        isFetchingFriend: true
      };
    case FETCH_FRIEND_SUCCESS:
      return {
        ...state,
        isFetchingFriend: false
      };
    case FETCH_FRIEND_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetchingFriend: false
      };
    case ADD_NEW_FRIEND:
      return {
        ...state,
        isAddingNewFriend: true
      };
    case ADD_NEW_FRIEND_SUCCESS:
      return {
        ...state,
        friends: [...action.payload],
        isAddingNewFriend: false
      };
    case ADD_NEW_FRIEND_FAILURE:
      return {
        ...state,
        error: action.payload,
        isAddingNewFriend: false
      };
    case UPDATE_FRIEND:
      return {
        ...state,
        isUpdatingFriend: true
      };
    case UPDATE_FRIEND_SUCCESS:
      return {
        ...state,
        friends: [...action.payload],
        isUpdatingFriend: false
      };
    case UPDATE_FRIEND_FAILURE:
      return {
        ...state,
        error: action.payload,
        isUpdatingFriend: false
      };
    case DELETE_FRIEND:
      return {
        ...state,
        isDeletingFriend: true
      };
    case DELETE_FRIEND_SUCCESS:
      return {
        ...state,
        friends: [...action.payload],
        isDeletingFriend: false
      };
    case DELETE_FRIEND_FAILURE:
      return {
        ...state,
        error: action.payload,
        isDeletingFriend: false
      };
    default:
      return state;
  }
};
