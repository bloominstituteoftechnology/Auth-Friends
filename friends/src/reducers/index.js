import { GETTING_FRIENDS, FRIENDS_RECEIVED, ADDING_FRIEND, FRIEND_ADDED, ERROR } from '../actions';
// friendAdded: true, addingFriend: false, 

const initialState = {
  friends: [],
  fetchingFriend: false,
  fetchedFriends: false,
  addingFriend: false,
  friendAdded: false,
  error: null,
}

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_FRIENDS:
      return {...state, fetchingFriend: true}
    case FRIENDS_RECEIVED:
      return {...state, friends: action.payload, fetchingFriend: false, fetchedFriends: true}
    case ADDING_FRIEND:
      return {...state, addingFriend: true}
    case FRIEND_ADDED:
      return {...state, friends: action.payload, addingFriend: false, friendAdded: true}
    case ERROR:
      return {...state, fetchingFriend: false, addingFriend: false, error: action.payload}
    default:
      return state;
  };
};