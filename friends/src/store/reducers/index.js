import {
  FETCHING_FRIENDS,
  FETCHING_FRIENDS_SUCCESS,
  FETCHING_FRIENDS_FAILURE,
  ADD_FRIEND,
  ADD_FRIEND_FAILURE,
  ADD_FRIEND_SUCCESS,
  GET_FRIEND,
  EDIT_FRIEND,
  DELETE_FRIEND
} from "../actions";

const initialState = {
  fetchingFriends: false,
  friends: [],
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return { ...state, fetchingFriends: true };
    case FETCHING_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        fetchingFriends: false,
        error: null
      };
    case FETCHING_FRIENDS_FAILURE:
      return {
        ...state,
        fetchingFriends: false,
        error: action.payload
      };
    case GET_FRIEND:
      return {
        ...state,
        fetchingFriends: true
      };
    case ADD_FRIEND:
      return {
        ...state,
        fetchingFriends: true
      };
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        fetchingFriends: false,
        error: null
      };
    case ADD_FRIEND_FAILURE:
      return {
        ...state,
        fetchingFriends: false,
        error: action.payload
      };
    case EDIT_FRIEND:
      return {
        ...state
        // friends: state.friends.map(friend => friend.id === action.payload.id ? {friend: ...action.payload.friend} : friend)
      };
    case DELETE_FRIEND:
      return {
        ...state,
        friends: state.friends.filter(friend => friend.id !== action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
