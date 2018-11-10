import { LOADING, GET_FRIENDS, ERROR } from '../actions/friendsActions'

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
  }

export default (state = initialState, action) => {
  switch(action.type){
    case LOADING: 
      return Object.assign({}, state, {updatingFriend: true})
    case GET_FRIENDS: 
      return Object.assign({}, state, {friends: action.friends, updatingFriend: false, error: ''})
    case ERROR:
      return Object.assign({}, state, {error: action.errorMessage, updatingFriend: false})
    default:
      return state
  }
}