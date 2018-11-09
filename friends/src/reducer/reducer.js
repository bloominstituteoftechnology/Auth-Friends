import { FETCHED_FRIENDS, ERROR, LOADING_FRIENDS } from "../action/action";

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

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_FRIENDS:
      return Object.assign({}, state, { fetchingFriends: true });
    case FETCHED_FRIENDS:
      return Object.assign({}, state, { fetchingFriends: false, error: "", friends: action.payload });
    case ERROR:
      return Object.assign({}, state, { error: "" });
    default:
      return state;
  }
};
