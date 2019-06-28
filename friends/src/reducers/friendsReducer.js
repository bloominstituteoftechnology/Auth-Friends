import {
    FETCHING_FRIENDS,
    FETCHING_FRIENDS_SUCCESS,
    FETCHING_FRIENDS_FAILURE,
    CREATING_FRIEND,
    CREATING_FRIEND_SUCCESS,
    CREATING_FRIEND_FAILURE
  } from '../actions';
  
  const initialState = {
    friends: [],
  
    // get friends
    fetchingFriends: false,
  
    // create new friend
    creatingFriend: false,
  
    error: null
  }
  
  export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_FRIENDS:
        return { ...state, fetchingFriends: true };
      case FETCHING_FRIENDS_SUCCESS:
        return {
          ...state,
          fetchingFriends: false,
          friends: [...state.friends, ...action.payload]
        };
      case FETCHING_FRIENDS_FAILURE:
        return { ...state, fetchingFriends: false, error: action.payload };
      case CREATING_FRIEND:
        return { ...state, creatingFriend: true };
      case CREATING_FRIEND_SUCCESS:
        return {
          ...state,
          creatingFriend: false,
          friends: [...state.friends, ...action.payload]
        }
      case CREATING_FRIEND_FAILURE:
        return { ...state, creatingFriend: false, error: action.payload };
      default:
        return state;
    }
  }