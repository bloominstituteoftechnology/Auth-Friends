import { FETCHING, FETCHED, ERROR, POSTING } from '../actions/index';
const initialState = {
    friends: [],
    fetchingFriends: false,
    friendsFetched: false,
    error: null
}
export const dataFetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING:
            return Object.assign({}, state, {
                fetchingFriends: true,
                friendsFetched: false,
                friends: [],
                error: null
            })
        case FETCHED:
            return Object.assign({}, state, {
                fetchingFriends: false,
                friendsFetched: true,
                friends: action.payload,
                error: null
            })
        case ERROR:
            return Object.assign({}, state, {
                fetchingFriends: false,
                friendsFetched: false,
                friends: [],
                error: action.payload,
            })
        case POSTING:
            return Object.assign({}, state, { friends: action.payload })
        default: return state;
    }
}
