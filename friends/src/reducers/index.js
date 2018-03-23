import { GOT_FRIEND, GET_FRIEND, ADD_FRIEND, ADDED_FRIEND, ERROR } from '../actions';

const initialState = {
    friends: [],
    fetching: false,
    error: null
};
// teacher used only friends = [] so part of the state

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIEND:
      return { ...state, fetching: true };
    case GOT_FRIEND:
      return { ...state, friends: action.friends, fetching: false 
      
    };
    case ERROR:
      return { ...state, error: action.errorMessage };
    case ADD_FRIEND:
      return { ...state, friends: action.friends };
    case ADDED_FRIEND:
      return { ...state, friends: action.friends };
    // case DELETE_FRIEND:
    default:
      return state;
  }
};
