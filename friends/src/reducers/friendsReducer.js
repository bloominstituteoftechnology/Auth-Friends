import { GETTING_FRIENDS, GET_FRIENDS, ERROR } from "../actions";

const initialState = {
  friends: [],
  getFriends: false,
  gettingFriend: false,
  error: null
};

export const friendsReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case GETTING_FRIENDS:
      return { ...state, gettingFriends: true };
    case GET_FRIENDS:
      return {
        ...state,
        gettingFriends: false,
        getFriends: true,
        friends: action.payload
      };
    case ERROR:
      return {
        ...state,
        gettingFriends: false,
        error: action.payload
      };
    default:
      return state;
  }
};
