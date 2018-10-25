import {
    FETCHING,
    SUCCESS,
    FAILURE,
  } from '../actions';


let initialState = {
    isFetching: false,
    friendsFetched: false,
    friends: [],
    error: null
}

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING: 
        return {...state, isFetching: true};
      case SUCCESS:
        return {
          ...state,
          isFetching: false,
          friendsFetched: true,
          friends: [...state.friends, ...action.payload]
        }
      case FAILURE:
        return {
          ...state,
          isFetching: false,
          friendsFetched: false,
          error: action.payload
        };
  
      default:
        return state;
    }
  };
  