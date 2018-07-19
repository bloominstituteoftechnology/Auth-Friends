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
    case 'FETCHING_FRIENDS':
      return { ...state, fetchingFriends: true };
    case 'FRIENDS_FETCHED':
      // return Object.assign({}, state, {
      //   fetchingFriends: false,
      //   friendsFetched: true,
      //   friends: action.payload
      // });
      return {
        ...state,
        fetchingFriends: false,
        friendsFetched: true,
        friends: action.payload
      };
    // case 'FRIENDS_SAVED':
    case 'ERROR': {
      return {
        ...state,
        fetchingFriends: false,
        friendFetched: false,
        error: 'Error fetching friends'
      };
    }
    default:
      return state;
  }
};
