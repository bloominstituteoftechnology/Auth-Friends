import * as actionTypes from "../actions/index";
// import { Object } from "core-js";

const initialState = {
  friends: [],
  fetchingFriends: false,
  friendsFetched: false,
  updatingFriend: false,
  creatingFriend: false,
  deletingFriend: false,

  error: null
};
export const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHING:
      return { ...state, fetchingFriends: true };
    case actionTypes.FETCH_SUCCESS:
      return { ...state, friends: action.payload, fetchingFriends: false };
    case actionTypes.FETCHFRIEND:
      return { ...state, friendsFetched: true };
    case actionTypes.FRIEND_SUCCESS:
      return { ...state, friends: action.payload, friendsFetched: false };

    case actionTypes.CREATING:
      return { ...state, creatingFriend: true };
    case actionTypes.CREATE_SUCCESS:
      return { ...state, friends: action.payload, creatingFriend: false };
    case actionTypes.UPDATING:
      return { ...state, creatingFriend: true };
    case actionTypes.UPDATE_SUCCESS:
      return { ...state, friends: action.payload, creatingFriend: false };
    case actionTypes.DELETING:
      return { ...state, deletingFriend: true };
    case actionTypes.DELETE_SUCCESS:
      return { ...state, friends: action.payload, deletingFriend: false };

    case actionTypes.ERROR:
      return {
        ...state,
        fetchingFriends: false,
        friendsFetched: false,
        updatingFriend: false,
        creatingFriend: false,
        deletingFriend: false,
        error: "Error"
      };

    default:
      return state;
  }
};
