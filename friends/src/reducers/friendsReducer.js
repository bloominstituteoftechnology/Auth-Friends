import { FETCHING_FRIENDS, FETCHING_FRIENDS_SUCCESS, FETCHING_FRIENDS_FAILURE, ADDING_FRIENDS, ADDING_FRIENDS_SUCCESS, ADDING_FRIENDS_FAILURE } from '../actions';

const initialState = {
  fetching: false,
  friends: [],
  error: null
};

export const myFriendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return { ...state, fetching: true };
    case FETCHING_FRIENDS_FAILURE:
      return { ...state, fetching: false, error: action.payload };
    case FETCHING_FRIENDS_SUCCESS:
      console.log('FETCHING_FRIENDS_SUCCESS action.payload', action.payload);
      return {
        ...state,
        friends: [...state.friends, ...action.payload],
        fetching: false
      };
    case ADDING_FRIENDS:
      return { ...state};
    case ADDING_FRIENDS_FAILURE:
      return { ...state, error: action.payload };
    case ADDING_FRIENDS_SUCCESS:
      console.log('ADDING_FRIENDS_SUCCESS action.payload', action.payload);
      return {
        ...state,
        friends: [...state.friends, ...action.payload],
      };
    default:
      return state;
  }
};