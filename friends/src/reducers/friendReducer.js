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
    case "FETCHING_FRIENDS":
      return Object.assign({}, state, { fetchingFriends: true });

    case "FRIENDS_FETCHED":
      return Object.assign({}, state, {
        friends: action.payload,
        friendsFetched: true,
        fetchingFriends: false
      });

    case "SAVING_FRIENDS":
      return Object.assign({}, state, { savingFriends: true });

    case "FRIENDS_SAVED":
      return Object.assign({}, state, {
        friends: action.payload,
        friendsSaved: true,
        savingFriends: false
      });

    case "FETCHING_FRIEND":
      return Object.assign({}, state, { fetchingFriend: true });

    case "FRIEND_FETCHED":
      return Object.assign({}, state, {
        friend: action.payload,
        friendFetched: true,
        fetchingFriend: false
      });

    case "ERROR":
      return Object.assign({}, state, { error: action.payload });

    default:
      return state;
  }
};
