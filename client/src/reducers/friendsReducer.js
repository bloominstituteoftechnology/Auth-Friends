import {
  FETCH_FRIENDS,
  FETCH_SINGLE_FRIEND,
  CREATE_FRIEND,
  DELETE_FRIEND,
  UPDATE_FRIEND
} from '../actions/types';

const initialState = {
  friends: [],
  friend: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIENDS:
      return { ...state, friends: action.payload };
    case FETCH_SINGLE_FRIEND:
      return { ...state, friend: action.payload };
    case CREATE_FRIEND:
      return { ...state, friends: action.payload };
    case DELETE_FRIEND:
      return { ...state, friends: action.payload };
    case UPDATE_FRIEND:
      return { ...state, friends: action.payload };
    default:
      return state;
  }
};
