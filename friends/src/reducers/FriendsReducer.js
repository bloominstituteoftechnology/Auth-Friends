import {FETCHING_FRIENDS, FETCHING_FRIENDS_SUCCESS, FETCHING_FRIENDS_FAILURE} from '../actions'
import {ADD_FRIEND, ADD_FRIEND_SUCCESS, ADD_FRIEND_FAILURE,} from '../actions'
import {DELETE_FRIEND_SUCCESS} from '../actions'


const initialState = {
  friends: [],
  isFetching: false,
  error: null,
  addingFriend: false
};

export const friendsReducer = (state = initialState, action) => {
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
    return {
        ...state,
        isFetching: false,
        ...state, error: action.payload
    }
    case ADD_FRIEND:
    return { ...state, addingFriend: true };

  case ADD_FRIEND_SUCCESS:
    return {
      ...state,
      addingFriend: false,
      friends: [...action.payload]
    };
  
  case ADD_FRIEND_FAILURE:
  return {
      ...state,
      addingFriend: false,
      ...state, error: action.payload
  }
  case DELETE_FRIEND_SUCCESS:
  return {
      ...state,
      friends: [...action.payload]
  }
    default:
    return state;
  }
};
