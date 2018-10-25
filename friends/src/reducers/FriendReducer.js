import {
  FETCHING,
  FETCHING_SUCCESS,
  FETCHING_FAILURE,
  ADDING,
  ADDING_SUCCESS,
  ADDING_FAILURE,
    DELETING,
    DELETING_SUCCESS,
    DELETING_FAILURE
  } from '../actions';
  
  const initialState = {
    fetching: false,
    friends: [],
    error: null
  }

export const friendReducer = (state = initialState, action) => {

    switch (action.type) {
      case FETCHING:
      return { ...state, fetching: true };


      case FETCHING_SUCCESS:
      return { ...state, fetching: false, friends : action.payload };

      case FETCHING_FAILURE:
      return { ...state, fetching: false, error : action.payload };


      case DELETING:
        return { ...state, fetching: true };


        case DELETING_SUCCESS:
        return { ...state, fetching: false, friends : [...action.payload] };

        case DELETING_FAILURE:
        return { ...state, fetching: false, error : action.payload };

        case ADDING:
        return { ...state, fetching: true };


        case ADDING_SUCCESS:
        return { ...state, fetching: false, friends : [...action.payload] };

        case ADDING_FAILURE:
        return { ...state, fetching: false, error : action.payload };


        default:
        return state;
    }
  };