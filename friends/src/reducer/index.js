import React from "react";

import {
  FETCH_FAIL,
  FETCH_FRIEND,
  FETCH_SUCCESS,
  ADD_FRIEND,
  DELETE_FRIEND,
  UPDATE_FRIEND
} from "../actions";

const initialState = {
  friends: [],
  fetching: false,
  deleting: false,
  updating: false,
  error: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIEND:
      return {
        ...state,
        fetching: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        fetching: false
      };
    case FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
        fetching: false
      };
    case ADD_FRIEND:
      return {
        ...state,
        friends: [...state.friends, ...action.payload],
        fetching: false
      };
    case DELETE_FRIEND:
      return {
        ...state,
        friends: state.friends.filter(friend => friend.id !== action.payload),
        fetching: false
      };
    case UPDATE_FRIEND:
      return;
    default:
      return state;
  }
};
