import * as actions from '../actions'

const initialState = {
  friends: [],
  friend: {},
  fetchingFriends: false,
  fetchingFriend: false,
  updatingFriend: false,
  deletingFriend: false,
  addingFriend: false,
  error: null,
}

export const friendsReducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.FRIENDS_REQUEST: 
      return {
        ...state,
        fetchingFriends: true
      }
    case actions.FRIEND_REQUEST:
      return {
        ...state,
        fetchingFriend: true
      }
    case actions.ADD_REQUEST:
      return {
        ...state,
        addingFriend: true
      }
    case actions.UPDATE_REQUEST:
      return {
        ...state,
        updatingFriend: true,
      }
    case actions.DELETE_REQUEST:
      return {
        ...state,
        deletingFriend: true,
      }
    case actions.FRIENDS_SUCCESS:
      return {
        ...state,
        fetchingFriends: false,
        friends: action.payload,
      }
    case actions.FRIEND_SUCCESS:
      return {
        ...state,
        fetchingFriend: false,
        friend: action.payload,
      }
    case actions.ADD_SUCCESS:
      return {
        ...state,
        addingFriend: false,
        friends: action.payload,
      }
    case actions.UPDATE_SUCCESS:
      return {
        ...state,
        updatingFriend: false,
        friends: action.payload,
      }
    case actions.DELETE_SUCCESS:
      return {
        ...state,
        deletingFriend: false,
        friends: action.payload,
      }
    case actions.FRIENDS_FAILURE:
    case actions.FRIEND_FAILURE:
    case actions.ADD_FAILURE:
    case actions.DELETE_FAILURE:
    case actions.UPDATE_FAILURE:
      return {
        ...state,
        fetchingFriends: false,
        fetchingFriend: false,
        addingFriend: false,
        updatingFriend: false,
        deletingFriend: false,
        error: action.payload,
      }
    default:
      return state;
  }
}