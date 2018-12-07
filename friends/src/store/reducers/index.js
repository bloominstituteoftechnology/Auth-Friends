import { combineReducers } from "redux";
import {
  FETCHING,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  ADD_FRIEND_START,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAILURE,
  UPDATE_FRIEND_START,
  UPDATE_FRIEND_SUCCESS,
  UPDATE_FRIEND_FAILURE,
  DELETE_FRIEND_START,
  DELETE_FRIEND_SUCCESS,
  DELETE_FRIEND_FAILURE
} from "../actions";

const initialState = {
  friends: [],
  isFetching: false,
  error: null
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        isFetching: true
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        error: null,
        isFetching: false,
        friends: action.payload
      };

    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };

    // Add New Friend //

    case ADD_FRIEND_START:
      return {
        ...state,
        isFetching: true
      };

    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        error: null,
        isFetching: false,
        friends: action.payload
      };

    case ADD_FRIEND_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };

    // Update Friend //

    case UPDATE_FRIEND_START:
      return {
        ...state,
        isFetching: true
      };

    case UPDATE_FRIEND_SUCCESS:
      return {
        ...state,
        error: null,
        isFetching: false,
        friends: action.payload
      };

    case UPDATE_FRIEND_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };

    // Delete Friend //

    case DELETE_FRIEND_START:
      return {
        ...state,
        isFetching: true
      };

    case DELETE_FRIEND_SUCCESS:
      return {
        ...state,
        error: null,
        isFetching: false,
        friends: action.payload
      };

    case DELETE_FRIEND_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default combineReducers({ reducers });
