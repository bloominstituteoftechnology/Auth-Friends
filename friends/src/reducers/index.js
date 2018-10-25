import {
  FETCHING_FRIENDS,
  FETCHING_FRIENDS_SUCCESS,
  FETCHING_FRIENDS_FAILURE,
  ADD_FRIEND,
  ADD_FRIEND_COMPLETE,
  ADD_FRIEND_FAILURE,
  UPDATE_FRIEND,
  UPDATE_FRIEND_SUCCESS,
  UPDATE_FRIEND_FAILURE,
  DELETE_FRIEND,
  DELETE_FRIEND_SUCCESS,
  DELETE_FRIEND_FAILURE
} from "../actions";

const initialState = {
  friends: [],
  isFetching: false,
  addingFriend: false,
  updatingFriend: false,
  deletingFriend: false,
  error: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return { ...state, isFetching: true };
    case FETCHING_FRIENDS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        friends: [...state.friends, ...action.payload]
      };
    case FETCHING_FRIENDS_FAILURE:
      console.log(action.payload);
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case ADD_FRIEND:
      return { ...state, addingFriend: true };
    case ADD_FRIEND_COMPLETE:
      return { ...state, addingFriend: false, friends: action.payload };
    case ADD_FRIEND_FAILURE:
      console.log(action.payload);
      return {
        ...state,
        addingFriend: false,
        error: action.payload
      };
    case UPDATE_FRIEND:
      return { ...state, updatingFriend: true };
    case UPDATE_FRIEND_SUCCESS:
      return { ...state, updatingFriend: false, friends: action.payload };
    case UPDATE_FRIEND_FAILURE:
      console.log(action.payload);
      return {
        ...state,
        updatingFriend: false,
        error: action.payload
      };
    case DELETE_FRIEND:
      return { ...state, deletingFriend: true };
    case DELETE_FRIEND_SUCCESS:
      return { ...state, deletingFriend: false, friends: action.payload };
    case DELETE_FRIEND_FAILURE:
      console.log(action.payload);
      return {
        ...state,
        deletingFriend: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
