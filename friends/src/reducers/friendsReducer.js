import { FETCH_FRIENDS } from "../actions";
import { FETCH_FRIENDS_SUCCESS } from "../actions";
import { FETCH_FRIENDS_FAILURE } from "../actions";

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
  // Array characters, Boolean fetching, null error.
};
export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIENDS:
      return { ...state, fetchingFriends: true };

    case FETCH_FRIENDS_FAILURE:
      console.log("fetchfriendfailure")
      console.log(action.payload);
      return { ...state, fetchingFriends: false, error: action.payload };

    case FETCH_FRIENDS_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        friends: [...state.friends, ...action.payload],
        fetchingFriends: false
      };
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};


