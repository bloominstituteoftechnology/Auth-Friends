import {FETCHING_FRIENDS, FRIENDS_FETCHED, FRIENDS_FETCHING_ERROR, FRIEND_ADDED, ADDING_FRIEND, FRIEND_ADDED_ERROR } from '../Actions'

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    addingFriend: false,
    friendAdded: false,
    // friendsSaved: false,
    // savingFriends: false,
    // updatingFriend: false,
    // friendUpdated: false,
    // deletingFriend: false,
    // friendDeleted: false,
    friends: [],
    error: null
  }

export const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_FRIENDS:
            return {...state, fetchingFriends: true};
        case FRIENDS_FETCHED:
            return { ...state, fetchingFriends: false, friendsFetched: true, friends: action.payload };
        case FRIENDS_FETCHING_ERROR:
            return {...state, error: action.payload};
        case ADDING_FRIEND:
            return {...state, addingFriend: true}
        case FRIEND_ADDED:
            return {...state, friendAdded: true, addingFriend: false, friends: action.payload };
        case FRIEND_ADDED_ERROR:
            return {...state, error: action.payload}
        default: 
            return state;
    }
}