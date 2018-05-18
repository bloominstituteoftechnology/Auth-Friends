import { FETCHED_FRIENDS, FETCHING_FRIENDS, ERROR } from '../actions';

const initalState = {
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

export const friendReducer = (state = initalState, action) => {
    switch (action.type) {
        case FETCHED_FRIENDS: 
            return Object.assign({}, state, {
                friends: state.friends.concat(action.payload),
                fetchingFriends: false,
                friendsFetched: true
            });
        case FETCHING_FRIENDS: 
            return Object.assign({}, state, {fetching: true});
        case ERROR:
            return Object.assign({}, state, {
                fetching: false,
                error: action.payload
        });
        default:
            return state;
    }
}