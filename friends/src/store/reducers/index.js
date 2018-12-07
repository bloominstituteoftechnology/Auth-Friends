import {
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAILURE,
  ADD_FRIEND_START,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAILURE,
  EDIT_FRIEND_FAILURE,
  EDIT_FRIEND_START,
  EDIT_FRIEND_SUCCESS,
  DELETE_FRIEND_FAILURE,
  DELETE_FRIEND_START,
  DELETE_FRIEND_SUCCESS
} from "../actions";

const initialState = {
  friends: [],
  error: null,
  isFetchingFriends: false
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIENDS_START:
      return {
        ...state,
        isFetchingFriends: true
      };
    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        isFetchingFriends: false,
        friends: action.payload,
        error: null
      };
    case FETCH_FRIENDS_FAILURE:
      return {
        ...state,
        isFetchingFriends: false,
        error: action.payload
      };
    case ADD_FRIEND_START:
      return {
        ...state,
        isFetchingFriends: true
      };
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        isFetchingFriends: false,
        friends: action.payload,
        error: null
      };
    case ADD_FRIEND_FAILURE:
      return {
        ...state,
        isFetchingFriends: false,
        error: action.payload
      };
    case EDIT_FRIEND_START:
      return {
          ...state,
          isFetchingFriends: true
      };
    case EDIT_FRIEND_SUCCESS:
      return {
          ...state,
          isFetchingFriends: false,
          friends: action.payload,
          error: null
      };
    case EDIT_FRIEND_FAILURE:
      return {
          ...state,
          isFetchingFriends: false,
          error: action.payload
      }
      case DELETE_FRIEND_START:
      return {
          ...state,
          isFetchingFriends: true
      };
    case DELETE_FRIEND_SUCCESS:
    console.log('yay')
      return {
          ...state,
          isFetchingFriends: false,
          friends: action.payload,
          error: null
      };
    case DELETE_FRIEND_FAILURE:
      return {
          ...state,
          isFetchingFriends: false,
          error: action.payload
      }
    default:
      return state;
  }
};

export default friendsReducer;
