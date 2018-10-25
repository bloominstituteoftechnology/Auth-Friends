import {
    FETCHING_FRIENDS,
    FETCHING_FRIENDS_SUCCESS,
    FETCHING_FRIENDS_FAILURE,
    CREATING_FRIENDS,
    CREATED_FRIENDS,
  } from "../actions";
  
  const initialState = {
    friends: [], 
    isFetching: false, 
    updatingFriends: false,
    creatingFriends: false,  
    error: null,
    friendSelected: {}, 
    showUpdate: false
  };
  export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_FRIENDS:
        return { ...state, isFetching: true} ;
      case FETCHING_FRIENDS_SUCCESS:
        return {
          ...state,
          isFetching: false,
          characters: [...state.characters, ...action.payload]
        };
      case FETCHING_FRIENDS_FAILURE:
        return { ...state, isFetching: false, error: action.payload };
      case CREATING_FRIENDS: 
        return {...state, creatingFriends: true}
      case CREATED_FRIENDS:
        return {...state, friends: action.payload, creatingFriends: false}
      default:
        return state;
    }
  };