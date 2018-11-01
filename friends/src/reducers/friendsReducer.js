import {
  FETCHING_FRIENDS,
  SUCCESS_GET_FRIENDS,
  FAILURE,
} from "../actions";

const initialState = {
  friends: [],
  isFetchingFriends: false,
  error: null,
}

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return {
        ...state, 
        isFetchingFriends: true 
      };
    
    case SUCCESS_GET_FRIENDS:
      return {
        ...state,
        isFetchingFriends: false,
        friends: [...state.friends, ...action.payload]
      };
    
    case FAILURE:
      return {
        ...state,
        isFetchingFriends: false,
        error: action.payload,
      }
    default:
      return state;
  }
}