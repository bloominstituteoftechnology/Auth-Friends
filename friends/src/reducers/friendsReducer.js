import {
  GETTING_FRIENDS,
  GET_FRIENDS,
  ERROR,
  CREATING_FRIEND,
  CREATE_FRIEND,
  DELETE_FRIEND,
  DELETING_FRIEND,
  UPDATE_FRIEND,
  UPDATING_FRIEND,
  SINGLE_FRIEND,
  CHANGE_UPDATE_FRIEND
} from "../actions";

const initialState = {
  friends: [],
  gettingFriend: false,
  creatingFriend: false,
  updatingFriend: false,
  deletingFriend: false,
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
        creatingFriend: false
      };

    case UPDATING_FRIEND:
      return { ...state, updatingFriend: true };
    case UPDATE_FRIEND:
      return { ...state, friends: action.payload, updatingFriend: false };
    case DELETING_FRIEND:
      return { ...state, deletingFriend: true };
    case DELETE_FRIEND:
      return { ...state, friends: action.payload, deletingFriend: false };
    case ERROR:
      return {
        ...state,
        gettingFriend: false,
        creatingFriend: false,
        updatingFriend: false,
        deletingFriend: false,
        error: action.payload
      };
    default:
      return state;
  }
};
