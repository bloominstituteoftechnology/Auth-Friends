import { IS_FETCHING, FRIENDS_FETCHED, ERROR_FETCHING_FRIENDS } from '../actions/getFriends';
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

export const rootReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case IS_FETCHING:
      return { ...state, fetchingFriends: true };
    case FRIENDS_FETCHED:
      console.log('Friends: ', action.payload);
      return {
        ...state,
        fetchedFriends: true,
        fetchingFriends: false,
        friends: Object.keys(action.payload)
      };
    case ERROR_FETCHING_FRIENDS:
      return { ...state, fetchingFriends: false, error: action.payload };
    default:
      return state;
  }
};