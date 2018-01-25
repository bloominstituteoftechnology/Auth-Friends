import {FETCHING_FRIENDS, FRIENDS_FETCHED, FRIENDS_FETCHING_ERROR, FRIEND_ADDED, ADDING_FRIEND, FRIEND_ADDED_ERROR, UPDATING_FRIEND, FRIEND_UPDATED, FRIEND_UPDATING_ERROR, DELETING_FRIEND, FRIEND_DELETED, FRIEND_DELETING_ERROR } from '../Actions'

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    addingFriend: false,
    friendAdded: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
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
            return {...state, error: action.payload};
        case UPDATING_FRIEND:
            return {...state, updatingFriend: true }
        case FRIEND_UPDATED:
            return {...state, updatingFriend: false, friendUpdated: true, friends: action.payload}
        case FRIEND_UPDATING_ERROR:
            return {...state, error: action.payload}
        case DELETING_FRIEND: 
            return {...state, deletingFriend: true }
        case FRIEND_DELETED: 
            return {...state, deletingFriend: false, friendDeleted: true, friends: action.payload}
        case FRIEND_DELETING_ERROR:
            return {...state, error: action.payload}
        default: 
            return state;
    }
}