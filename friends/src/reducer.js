import { FETCH_DATA, FETCH_SUCCESS, FETCH_FAILURE } from "./action";


const initialState = {
  isFetching: false,
  friends: []
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
    return Object.assign({}, state, {
      isFetching: true,
    });
    case FETCH_SUCCESS:
    return Object.assign({}, state, {
      isFetching: false,
      friends: action.payload
    });
    default:
      return state;
  }
}