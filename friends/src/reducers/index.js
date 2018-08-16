import { FETCH, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';
import { combineReducers } from 'redux';

const initialState = {
  friends: [],
  isFetching: false,
  isFetched: false,
  err: null
};

export default combineReducers({
  friendsReducer: (state = initialState, action) => {
    switch(action.type) {
      case FETCH:
        return { ...state, isFetching: true };
      case FETCH_SUCCESS:
        return { ...state, isFetching: false, isFetched: true, friends: action.payload };
      case FETCH_FAILURE:
        return { ...state, isFetching: false, err: action.payload };
      default:
        return state;
    }
  }
});
