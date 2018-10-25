import { FETCHING_FRIENDS /*ADD_FRIEND */ } from "../actions";

const initialState = {
  fetchingFriends: false,
  addFriend: false,
  friends: [],
  error: null
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return { ...state, fetching: true };
    // case ADD_FRIEND: {
    //   return { ...state, friends: action.payload };
    default:
      return state;
  }
};
