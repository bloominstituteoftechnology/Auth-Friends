import {
  FETCHED_FRIENDS,
  ERROR,
  LOADING_FRIENDS,
  UPDATE_STATUS_CHANGE
} from "../action/action";

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
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_FRIENDS:
      return Object.assign({}, state, { fetchingFriends: true });
    case FETCHED_FRIENDS:
      return Object.assign({}, state, {
        fetchingFriends: false,
        error: "",
        friends: action.payload
      });
    case ERROR:
      return Object.assign({}, state, { error: "" });
    case UPDATE_STATUS_CHANGE:
      return Object.assign({}, state, {
        updatingFriend: !state.updatingFriend
      });
    default:
      return state;
  }
};
