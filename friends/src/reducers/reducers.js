import { GET_FRIENDS, ERROR, FETCHING_FRIENDS } from '../actions/actions';

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

export const getFriendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return Object.assign({}, state, { fetchingFriends: true });
    
    case GET_FRIENDS:
      return Object.assign({}, state, { fetchingFriends: false, friendsFetched: true, friends: state.friends.concat(action.payload) });
      
    default:
      return state;
  }
}