import {
  FETCHING_FRIENDS,
  FRIEND_FETCH_SUCCESS,
  FRIEND_FETCH_FAILURE,
  ADDING_FRIEND,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAILURE,
} from '../actions';
const initialState = {
  friends: [],
  fetching: false,
  error: null,
  addingFriend: false,
  friendAdded: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return {
        ...state,
        fetching: true,
      };
    case FRIEND_FETCH_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        fetching: false,
      };
    case FRIEND_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetching: false,
      };
    case ADDING_FRIEND:
      return {
        ...state,
        addingFriend: true,
      };
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        addingFriend: false,
        friendAdded: true, // do I really need this? don't think so
      };
    case ADD_FRIEND_FAILURE:
      return {
        ...state,
        addingFriend: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
