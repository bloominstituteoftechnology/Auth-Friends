import {
  FETCHING,
  FETCHING_SUCCESS,
  FETCHING_FAILURE,
  ADDING,
  ADDING_SUCCESS,
  ADDING_FAILURE,
  DELETING,
  DELETING_SUCCESS,
  DELETING_FAILURE,
  UPDATING,
  UPDATING_SUCCESS,
  UPDATING_FAILURE
} from "../actions";

const initialState = {
  friends: [],
  error: null,
  fetchingFriends: false,
  addingFriend: false,
  deletingFriend: false,
  updatingFriend: false
};
export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return { ...state, fetchingFriends: true };
    case FETCHING_SUCCESS:
      return {
        ...state,
        friends: [...state.friends, ...action.payload],
        fetchingFriends: false
      };
    case FETCHING_FAILURE:
      return { ...state, fetchingFriends: false, error: action.payload };
    case ADDING:
      return { ...state, addingFriend: true };
    case ADDING_SUCCESS:
      return {
        ...state,
        friends: [...action.payload],
        addingFriend: false
      };
    case ADDING_FAILURE:
      return { ...state, addingFriend: false, error: action.payload };
    case DELETING:
      return { ...state, deletingFriend: true };
    case DELETING_SUCCESS:
      return {
        ...state,
        friends: [...action.payload],
        deletingFriend: false
      };
    case DELETING_FAILURE:
      return { ...state, deletingFriend: false, error: action.payload };
    case UPDATING:
      return { ...state, updatingFriend: true };
    case UPDATING_SUCCESS:
      return {
        ...state,
        friends: [...action.payload],
        updaingFriend: false
      };
    case UPDATING_FAILURE:
      return { ...state, updaingFriend: false, error: action.payload };
    default:
      return state;
  }
};
