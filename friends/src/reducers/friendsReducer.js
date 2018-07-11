import { FETCH_FRIENDS, FETCH_FAILED, FRIENDS_FETCHED } from './../actions';

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

export const friendsReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case FETCH_FRIENDS:
            return Object.assign({}, state, {fetching: true})
        case FRIENDS_FETCHED:
            return Object.assign({}, state, {fetching: false, fetched: true, friends: payload})
        case FETCH_FAILED:
            return Object.assign({}, state, {fetching: false, error: payload})
        default: 
            return state
    }
}