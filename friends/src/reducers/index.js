import { FETCHING_FRIENDS, FRIENDS_FETCHED, ERROR_FETCHING } from '../actions';

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    savingFriends: false,
    updatingFriends: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    error: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_FRIENDS:
            return { ...state, fetchingFriends: true};
        case FRIENDS_FETCHED:
            return { ...state, fetchingFriends: false, friendsFetched: true, friends: action.payload, error: null };
        case ERROR_FETCHING:
            return { ...state, fetchingFriends: false, friendsFetched: false, error: action.payload }
        default:
            return state;
    }
}