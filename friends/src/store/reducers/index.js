import {
  FETCHING_FRIENDS,
  FETCHING_FRIENDS_SUCCESS,
  FETCHING_FRIENDS_FAILURE,
  ADD_FRIEND,
  ADD_FRIEND_FAILURE,
  ADD_FRIEND_SUCCESS,
  GET_SINGLE_FRIEND,
  GET_SINGLE_FRIEND_SUCCESS,
  GET_SINGLE_FRIEND_FAILURE,
  EDIT_FRIEND,
  EDIT_FRIEND_SUCCESS,
  EDIT_FRIEND_FAILURE,
  DELETE_FRIEND,
  DELETE_FRIEND_SUCCESS,
  DELETE_FRIEND_FAILURE
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
    case GET_SINGLE_FRIEND:
      return {
        ...state,
        fetchingFriends: true
      };
    case GET_SINGLE_FRIEND_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        fetchingFriends: false,
        error: null
      };
    case GET_SINGLE_FRIEND_FAILURE:
      return {
        ...state,
        fetchingFriends: false,
        error: action.payload
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
        ...state,
        fectchingFriends: true
      };
    case EDIT_FRIEND_SUCCESS:
      return {
        ...state,
        friends: state.friends.map(friend =>
          friend.id === action.payload.id
            ? { ...friend, ...action.payload }
            : friend
        ),
        fetchingFriends: false,
        error: null
      };
    case EDIT_FRIEND_FAILURE:
      return {
        ...state,
        fetchingFriends: false,
        error: action.payload
      };
    case DELETE_FRIEND:
      return {
        ...state,
        fetchingFriends: true,
        error: null
      };
    case DELETE_FRIEND_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        fetchingFriends: false,
        error: null
      };
    case DELETE_FRIEND_FAILURE:
      return {
        ...state,
        fetchingFriends: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
