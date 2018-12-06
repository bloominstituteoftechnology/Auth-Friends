import {
  FETCHING_FRIENDS,
  FETCHING_FRIENDS_SUCCESS,
  FETCHING_FRIENDS_FAILURE,
  ADD_FRIEND,
  ADD_FRIEND_FAILURE,
  GET_FRIEND,
  EDIT_FRIEND,
  DELETE_FRIEND
} from "../actions";

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
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
        friends: action.payload
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
        updatingFriend: true
      };
    case ADD_FRIEND:
      return {
        ...state,
        friends: [...state.friends, ...action.payload]
      };
    case ADD_FRIEND_FAILURE:
      return {
        ...state,
        addFriend: false,
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
