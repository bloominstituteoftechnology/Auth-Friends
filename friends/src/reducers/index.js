import { FETCHING, FETCHED, ADDING, ADDED, ERROR } from '../actions';

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendAdded: false,
    addingFriend: false,
    friends: [],
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING:
            return { ...state, fetchingFriends: true };
        case FETCHED:
            return {
                ...state,
                fetchingFriends: false,
                friends: [...state.friends, ...action.payload]
            };
        case ADDING:
            return { ...state, addingFriend: true };
        case ADDED:
            return {
                ...state,
                addingFriend: false,
                friends: [...state.friends, ...action.payload]
            };
        case ERROR:
            return { ...state, fetchingFriends: false, addingFriend: false, error: action.payload };
        default:
            return state;
    }
};