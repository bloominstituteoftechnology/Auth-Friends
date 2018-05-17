import { FETCHING_FRIENDS, FRIENDS_FETCHED, ERROR } from '../actions';

let initialState = {
    fetchingFriends: false, //used
    friendsFetched: false, //used
    friendsSaved: false, //used
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [], //used
    error: null //used
  }


export const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_FRIENDS:
            return Object.assign({}, state, {fetchingFriends: true})
        case FRIENDS_FETCHED:
            return Object.assign({}, state, {friends: state.friends.concat(action.payload), fetchingFriends: false, friendsFetched: true})
        case ERROR:
            return Object.assign({}, state, {error: action.payload, fetching: false})
        default: 
            return state;

    }
}