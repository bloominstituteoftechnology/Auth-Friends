import {
  FETCHING_FRIENDS,
  FETCHED,
  ERROR_FETCHING,
  POSTING_FRIEND,
  POSTED,
  ERROR_POSTING
} from "../actions";

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

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
