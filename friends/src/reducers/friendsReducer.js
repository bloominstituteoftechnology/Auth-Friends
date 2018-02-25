//import * as actionTypes from '../actions';

const initialState = {
  friends: [],
  error: null
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_FRIEND":
      return { ...state, friends: action.payload };
    case "UPDATE_FRIEND":
      return { ...state, friends: action.payload };
    case "DELETE_FRIEND":
      return { ...state, friends: action.payload };
    case "CREATE_FRIEND":
      return { ...state, friends: action.payload };
    case "ERROR":
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}


