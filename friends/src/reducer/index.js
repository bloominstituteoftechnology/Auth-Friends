import React from "react";

export const ADD_FRIEND = "ADD_FRIEND";
export const UPDATE_FRIEND = "UPDATE_FRIEND";
export const DELETE_FRIEND = "DELETE_FRIEND";
export const FETCH_FRIEND = "FETCH_FRIEND";

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
        friends: action.payload
      };
    case ADD_FRIEND:
      return {
        ...state,
        friends: [...friends, ...action.payload]
      };
    case DELETE_FRIEND:
      return {
        ...state,
        friends: state.friends.filter(friend => friend.id !== action.payload)
      };
    case UPDATE_FRIEND:
      return {};
    default:
      return state;
  }
};
