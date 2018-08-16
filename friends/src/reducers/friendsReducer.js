const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  addingFriend: false,
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
      return {
        ...state,
        fetchingFriends: true
      };
    case 'DATA_*_SUCCESS':
      return {
        ...state,
        friends: [ 
          ...action.results
        ],
        fetchingFriends: false,
        friendsFetched: true,
        addingFriend: false,
        updatingFriend: false
      };
    case 'DATA_*_ERROR':
      return {
        ...state,
          fetchingFriends: false,
          error: action.error
        };
    case 'POST_DATA':
        return {
          ...state,
          addingFriend: true
        };
    case 'UPDATE_DATA':
        return {
          ...state,
          updatingFriend: true
        }
    default:
      return state;
  }
};