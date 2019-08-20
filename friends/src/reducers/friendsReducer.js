import {
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_FAILURE,
  FETCH_DATA_SUCCESS
} from "../actions";

const initialState = {
  friends: [],
  logginIn: false,
  error: "",
  fetchingData: false
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIENDS_START:
      return {
        ...state,
        fetchingData: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        fetchingError: null,
        fetchingData: false,
        friends: action.payload
      };
    case FETCH_FRIENDS_FAILURE:
      return {
        ...state,
        fetchingError: action.payload,
        fetchingData: false
      };
    default:
      return state;
  }
};
export default friendsReducer;
