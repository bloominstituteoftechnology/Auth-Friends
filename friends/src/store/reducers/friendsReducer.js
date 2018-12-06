const initialFriendsState = {
  friends: [],
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  error: null
};

export const friendsReducer = (state = initialFriendsState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
