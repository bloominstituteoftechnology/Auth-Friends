import { UPDATING_FRIEND, FRIEND_UPDATED, FRIEND_NOT_UPDATED, DELETE_FRIEND, FRIEND_DELETED, FRIEND_NOT_DELETED } from './../actions';

const initialState = {
    friends: [],
    fetching: false,
    fetched: false,
    savingFriend: false,
    friendSaved: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendsDeleted: false,
    error: null
}

export const deleteFriendReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case DELETE_FRIEND:
            return Object.assign({}, state, {deletingFriend: true})
        case FRIEND_DELETED:
            return Object.assign({}, state, {deletingFriend: false, friendsDeleted: true, friends: payload})
        case FRIEND_NOT_DELETED:
            return Object.assign({}, state, {deletingFriend: false, error: payload})
            default: 
            return state
    }
}

export const updateFriendReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case UPDATING_FRIEND:
            return Object.assign({}, state, {updatingFriend: true})
        case FRIEND_UPDATED:
            return Object.assign({}, state, {updatingFriend: false, friendUpdated: true, friends: payload})
        case FRIEND_NOT_UPDATED:
            return Object.assign({}, state, {updatingFriend: false, error: payload})
            default: 
            return state
    }
}