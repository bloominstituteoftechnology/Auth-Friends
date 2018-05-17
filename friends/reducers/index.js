import { FETCHING_FRIENDS, ERROR_FETCHING_FRIENDS, FRIENDS_FETCHED} from '../actions';

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

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return Object.assign({}, state, { fetchingFriends: true });
    case FRIENDS_FETCHED:
      return Object.assign({}, state, 
        { fetchingFriends: false, 
          friendsFetched: true, 
          friends: [...state.friends, ...action.payload] 
        });
    case ERROR_FETCHING_FRIENDS:
      return Object.assign({}, state, { fetchingFriends: false, error: action.payload });
    default:
      return state;
  }
};