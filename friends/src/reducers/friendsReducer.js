import { FETCHING_FRIENDS, FETCHING_FRIENDS_SUCCESS, FETCHING_FRIENDS_FAILURE, HANDLE_CLICK, ADD_FRIEND, ADD_FRIEND_ERROR } from '../actions';

const initialState = {
  friends: [],
  isFetching: false,
  error: null,
  adding: false,
};
export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return { ...state, isFetching: true };
    case FETCHING_FRIENDS_SUCCESS:
      return {
        ...state,        
        friends: [...state.friends, ...action.payload],
        isFetching: false
      };
    case FETCHING_FRIENDS_FAILURE:
      return { ...state, isFetching: false, error: action.payload };
    
    case HANDLE_CLICK:
      return {...state, adding: true};
    case ADD_FRIEND:
      return { ...state, friends: action.payload, adding: false };
    case ADD_FRIEND_ERROR:
      return { 
        ...state, 
        adding: false, 
        error: action.payload
      }  
    default:
      return state; 
  }
};
