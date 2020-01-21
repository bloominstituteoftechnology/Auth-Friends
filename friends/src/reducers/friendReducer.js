import {
  LOGIN_START,
  LOGIN_SUCCESS,
  GET_DATA_START,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
  ADD_NEW_FRIEND,
} from '../actions/actions';

const initialState = {
  friends: [],
  logginIn: false,
  fetchingData: false,
  error: ""
};

export const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true,
        error: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: ""
      };
    case GET_DATA_START:
      return {
        ...state,
        fetchingData: true,
        error: ""
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        friends: action.payload
      };
    case GET_DATA_FAILURE:
      return {
        ...state,
        fetchingData: false,
        error: action.payload
      };
    case ADD_NEW_FRIEND:
      return {
        ...state,
        friends: [...state.friends, action.payload]
      };
    default:
      return state;
  }
};