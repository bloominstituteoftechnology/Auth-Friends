import { FETCHING_FRIENDS, FETCHING_FRIENDS_SUCCESS, FETCHING_FRIENDS_FAILURE, ADDING_FRIENDS_SUCCESS, ADDING_FRIENDS_FAILURE, DELETING_FRIENDS_SUCCESS, DELETING_FRIENDS_FAILURE, TOGGLE_FRIENDS_SUCCESS } from '../actions';

const initialState = {
  fetching: false,
  friends: [],
  error: null,
  visible: true
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
    case ADDING_FRIENDS_FAILURE:
      return { ...state, error: action.payload };
    case ADDING_FRIENDS_SUCCESS:
      console.log('ADDING_FRIENDS_SUCCESS action.payload', action.payload);
      return {
        ...state,
        friends: [...action.payload],
      };
    case DELETING_FRIENDS_FAILURE:
      return { ...state, error: action.payload };
    case DELETING_FRIENDS_SUCCESS:
      console.log('DELETING_FRIENDS_SUCCESS action.payload', action.payload);
      return {
        ...state,
        friends: state.friends.filter(friend => friend.id !== action.payload),
      };
    // case actionTypes.UPDATING_FRIEND:
    //   return { ...state, updatingFriend: true };
    // case actionTypes.UPDATE_FRIEND:
    //   return { ...state, friends: action.payload, updatingFriend: false };
    case TOGGLE_FRIENDS_SUCCESS:
      return state.map(friend => {
        return friend.id === action.payload
        ? { ...friend, visible: !friend.visible }
        : friend;
      })
    default:
      return state;
  }
};