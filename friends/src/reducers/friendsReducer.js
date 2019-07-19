import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  GET_ACCOUNT_START,
  GET_ACCOUNT_SUCCESS,
  GET_ACCOUNT_FAILED
} from '../actions/friendsActions';

const initialState = {
  deletingFriend: false,
  fetchingFriends: false,
  friends: [],
  loggingIn: false,
  savingFriends: false,
  updatingFriend: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: true,
        error: null
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loggingIn: false,
        error: action.payload.message
      };
    case GET_ACCOUNT_START:
      return {
        ...state,
        fetchingFriends: true
      };
    case GET_ACCOUNT_SUCCESS:
      const { friends } = state.friends;
      return {
        ...state,
        fetchingFriends: false,
        error: null,
        friends
      };
    case GET_ACCOUNT_FAILED:
      return {
        ...state,
        fetchingFriends: false,
        error: action.payload.message
      };
    default:
      return state;
  }
}
