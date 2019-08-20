import {
  FETCH_DATA_START,
  FETCH_DATA_FAILURE,
  FETCH_DATA_SUCCESS
} from "../actions";

const initialState = {
  islogging: false,
  loginError: null
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        isLogging: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLogging: false,
        loginError: null
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        isLogging: false,
        loginError: action.payload
      };
    default:
      return state;
  }
};
export default loginReducer;
