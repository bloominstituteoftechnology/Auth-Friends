import { FETCHING_FRIENDS, FRIENDS_FETCHED, ERROR_FETCHING_FRIENDS} from '../actions/actions';

// const initialState = {
//     fetchingFriends: false,  Getting Friends
//     friendsFetched: false,
//     savingFriends: false,    Adding Friends
//     friendsSaved: false,
//     updatingFriend: false,   Updating Friends
//     friendUpdated: false,
//     deletingFriend: false,   Deleting Friends
//     friendDeleted: false,
//     friends: [],
// }

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  friends: [],
};

export const rootReducer = (state = initialState, action) => {
  console.log("Whole Action", action);
  switch (action.type) {
    case FETCHING_FRIENDS:
      return { ...state, fetching: true };
    case FRIENDS_FETCHED:
      return {
        ...state,
        fetched: true,
        fetching: false,
        friends: action.payload,
      };
    case ERROR_FETCHING_FRIENDS:
      return { ...state, fetching: false, error: action.payload };
    default:
      return state;
  }
};

