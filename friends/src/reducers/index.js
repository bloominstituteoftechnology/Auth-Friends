import { FETCHING_FRIENDS, SUCCESS, FAILURE, ADDING_FRIEND, FRIEND_ADDED } from "../actions";

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  friends: [],
  error: null,
  addingFriend: false
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
      case ADDING_FRIEND: 
      return {...state, addingFriend:true} 
      case FRIEND_ADDED:
      return {...state, addingFriend:false, friends:[ ...payload]}
    default:
      return state;
  }
};
