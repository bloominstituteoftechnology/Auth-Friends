import { FETCHING, FETCHED, ERROR } from '../actions';

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
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
            })
        default:
            return state;
    }
}