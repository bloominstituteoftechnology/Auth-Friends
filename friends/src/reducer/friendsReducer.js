import {
    FETCHING, SUCCESS, FAILURE, ADDING_FRIEND, CREATED_FRIEND, DELETE_FRIEND, DELETING_FRIEND
  } from '../actions';


let initialState = {
    isFetching: false,
    friendsFetched: false,
    friendsSaved: false,
    friendUpdated: false,
    friendDeleted: false,
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
        case ADDING_FRIEND:
        return {
            isFetching: true,
            ...state
        };
        case CREATED_FRIEND:
        return {
            ...state,
            isFetching: false,
            friendsFetched: true,
            friendsSaved: true,
            friends: [...state, ...action.payload]
        }
        case DELETE_FRIEND:
        return {
            isFetching: true,
            ...state
        }
        case DELETING_FRIEND:
        return {
            isFetching: false,
            friendsFetched: true,
            friendDeleted: true,
            friends: [...state, ...action.payload]
        }
  
      default:
        return state;
    }
  };
  