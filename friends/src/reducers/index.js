import { FETCHING, FETCHED, ERROR, ADDING } from '../actions';

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    // addedFriend: false,
    addingFriend: false,
    friends: [],
    error: null
}

export const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING:
            return Object.assign({}, state, {
                fetchingFriends: true,
                friendsFetched: false,
                error: null
            });
        case FETCHED:
            return Object.assign({}, state, {
                fetchingFriends: false,
                friendsFetched: true,
                friends: action.payload
            });
        case ERROR:
            return Object.assign({}, state, {
                fetching: false,
                error: action.payload
            });
        case ADDING:
            return Object.assign({}, state, {
                addingFriend: true
            });
        // case ADDED_FRIEND:
        //     return Object.assign({}, state, {
        //         addedFriend: true,
        //         fetchingFriends: false,
        //         friends: action.payload
        //     })
        default:
            return state;
    }
};