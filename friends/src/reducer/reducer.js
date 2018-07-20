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
      return {
        ...state,
        fetchingFriends: false,
        friendsFetched: true,
        friends: action.payload
      };
    case 'ADDING_FRIEND':
      return { ...state, savingFriends: true, friendsSaved: false };

    case 'FRIENDS_SAVED':
      return {
        ...state,
        savingFriends: false,
        friendsSaved: true,
        friends: [...state.friends, action.payload]
      };

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
