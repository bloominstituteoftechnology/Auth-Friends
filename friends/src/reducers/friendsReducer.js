import { GET_FRIENDS,  GETTING_FRIENDS, CREATING_FRIENDS, CREATE_FRIEND, ERROR } from "../actions";

const initialState = {
  friends: [],
  gettingFriends: false,
  creatingFriends: false,
  error: null
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_FRIENDS:
      return { ...state, gettingFriends: true };
    case GET_FRIENDS:
      return { ...state, friends: [...action.payload], gettingFriends: false };
    case CREATING_FRIENDS:
      return { ...state, creatingFriends: true };
    case CREATE_FRIEND:
      return { ...state, friends: [...action.payload], creatingFriend: false };
    case ERROR:
      return {
        ...state,
        gettingFriends: false,
        creatingFriend: false,
        error: action.payload
      };
    default:
      return state;
  }
};
