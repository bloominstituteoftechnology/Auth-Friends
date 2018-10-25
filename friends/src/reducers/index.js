import { FETCHING_FRIENDS, SUCCESS, FAILURE } from "../actions";

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  friends: [],
  error: null
};

export const friendsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCHING_FRIENDS:
      return { ...state, fetchingFriends: true };
    case FAILURE:
      return { ...state, fetchingFriends: false, error: payload };
    case SUCCESS:
      return {
        ...state,
        fetchingFriends: false,
        friendsFetched: true,
        friends: [...payload]
      };

    default:
      return state;
  }
};
