import {
    FETCHING_FRIENDS,
    FETCHED_FRIENDS,
    ERROR
} from '../actions/actions';

const initialState = {
    friends: [],
    fetchingFriends: false,
    fetchedFriends: false,
    error: null,
}

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_FRIENDS:
            return Object.assign({}, state, {
                fetchingFriends: true,
            })
        case FETCHED_FRIENDS:
            return Object.assign({}, state, {
                fetchingFriends: false,
                fetchedFriends: true,
                friends: action.payload
            })
        case ERROR:
            return Object.assign({}, state, {
                fetchedFriends: false,
                error: action.payload
            })
        default:
            return state;
    }
}