import actionTypes from "../actions";

const initialState = {
  friends: [],
  gettingFriends: false,
  creatingFriends: false,
  error: null
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETTING_FRIENDS:
      return { ...state, gettingFriends: true };
    case actionTypes.GET_FRIENDS:
      return { ...state, friends: action.payload, gettingFriends: false };
    case actionTypes.CREATING_FRIENDS:
      return { ...state, creatingFriends: true };
    case actionTypes.CREATE_FRIEND:
      return { ...state, friends: action.payload, creatingFriend: false };
    case actionTypes.ERROR:
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
