import { GETTING_FRIENDS, GET_FRIENDS, ERROR } from "../actions";

const initialState = {
  friends: [],
  // getFriends: false,
  gettingFriend: false,
  creatingFriend: false,
  error: null
};

export const friendsReducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case GETTING_FRIENDS:
      return { ...state, gettingFriends: true };
    case GET_FRIENDS:
      return {
        ...state,
        gettingFriends: false,
        // getFriends: true,
        friends: action.payload
      };
    case CREATING_FRIEND:
      return {
        ...state, 
        creatingFriend: true
      };
    case CREATE_FRIEND:
    return { 
      ...state, 
      friends: action.payload, 
      creatingFriend: false };
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
