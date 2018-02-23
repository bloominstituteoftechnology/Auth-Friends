import {
  FETCHING_FRIENDS,
  FRIENDS_FETCHED,
  // FRIENDS_SAVED,
  // SAVING_FRIENDS,
  ERROR_FETCHING_FRIENDS,
  // ERROR_SAVING_FRIENDS,
} from '../actions/index';

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
  error: null,
};
export const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case FETCHING_FRIENDS:
      return { ...state, fetchingFriends: true };
    case FRIENDS_FETCHED:
      //console.log('DOOOOGS: ', action.payload);
      return {
        ...state,
        friendsFetched: true,
        fetchingFriends: false,
        friends: action.payload,
      };
    case ERROR_FETCHING_FRIENDS:
      return { ...state, fetchingFriends: false, error: action.payload };
    default:
      return state;
  }
};


export default reducer;