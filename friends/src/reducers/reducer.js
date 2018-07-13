import {
  GET_FRIENDS,
  GOT_FRIENDS,
  ERROR,
  SUBMIT_EDIT
} from "../actions/action";

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [],
  error: null
};

export const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIENDS:
      return Object.assign({}, state, { fetchingFriends: true });
    case GOT_FRIENDS:
      console.log("action.payload is: ", action.payload);
      return Object.assign({}, state, { friends: action.payload });
    case SUBMIT_EDIT:
      return Object.assign({}, state, { friends: action.payload });
    case ERROR:
      return Object.assign({}, state, { error: "Error, no friends found!" });
    default:
      return state;
  }
};
