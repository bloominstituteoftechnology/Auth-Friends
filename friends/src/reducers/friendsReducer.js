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

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_DATA':
      return {...state,
        fetchingFriends: true
      };
    case 'DATA_FETCH_SUCCESS':
      return {
        ...state,
        friends: [
          ...state.friends, 
          ...action.results
        ],
        fetchingFriends: false,
        friendsFetched: true
      };
    case 'DATA_FETCH_ERROR':
      return {
        ...state,
          fetchingFriends: false,
          error: 'Error fetching data'
        };
    default:
      return state;
  }
};