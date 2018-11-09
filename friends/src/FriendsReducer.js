import { FETCHED_INFO, ERROR, LOADING, ADDFRIEND, DELETEFRIEND, UPDATEFRIEND } from "./Actions";
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
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case LOADING:
      return { ...state, fetchingFriends: true };

    case ERROR:
      return { ...state, error: action.payload, fetchingFriends: false };

    case FETCHED_INFO:
      return Object.assign({}, state, {
        friends: action.payload,
        error: null,
        fetchingFriends: false,
      });
    case ADDFRIEND:
      return Object.assign({}, state, {
        fetchingFriends: false,
        friends: action.payload,
      });
    case DELETEFRIEND:
      return Object.assign({}, state, {
        fetchingFriends: false,
        friends: action.payload,
      });
    case UPDATEFRIEND:
      return Object.assign({}, state, {
        fetchingFriends: false,
        friends: action.payload,
      });
    default:
      return state;
  }
};
