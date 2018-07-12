const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  savingFriends: false,
  friendsSaved: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [],
  error: null
};

export const friendsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCHING_FRIENDS':
      return Object.assign({}, state, { fetchingFriends: true });

    case 'FRIENDS_FETCHED':
      return Object.assign({}, state, { friends: action.payload, friendsFetched: true, fetchingFriends: false });

    case 'SAVING_FRIENDS':
      return Object.assign({}, state, { savingFriends: true });

    case 'FRIENDS_SAVED':
      return Object.assign({}, state, { friends: action.payload, friendsSaved: true, savingFriends: false });

    case 'UPDATING_FRIEND':
      return Object.assign({}, state, {  });

    case 'FRIEND_UPDATED':
       return Object.assign({}, state, {  });

    case 'DELETING_FRIEND':
      return Object.assign({}, state, {  });

    case 'FRIEND_DELETED':
      return

    case 'ERROR':
      return Object.assign({}, state, { error: action.payload });

    default:
      return state;
  }
}
