const initState = {
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
export default (state = initState, action) => {
  console.log("reducer working");
  switch (action.type) {
    default:
      return state;
  }
};
