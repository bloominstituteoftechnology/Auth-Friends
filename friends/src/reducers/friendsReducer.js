import { FETCHING_FRIENDS, FRIENDS_FETCHED, UPDATING_FRIEND, FRIEND_UPDATED, ERROR } from "../actions/FriendsActions";

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
  error: null //why not an empty string?
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_FRIENDS:
            return Object.assign({},state, {loading: true})
        case FRIENDS_FETCHED:
            return Object.assign({}, state, {loading: false})
        case UPDATING_FRIEND:
            return Object.assign({}, state, {loading: true})
        case FRIEND_UPDATED:
            return Object.assign({}, state, {loading: false})
        case ERROR: 
            return Object.assign({}, state, {error: action.errorMessage, loading: false})
        default:
            return state
    }
}

