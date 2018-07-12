import { FETCHING_FRIENDS, FRIENDS_FETCHED, ERROR_FETCHING, SAVING_FRIEND, FRIEND_SAVED, DELETING_FRIEND, FRIEND_DELETED } from '../actions';

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    savingFriend: false,
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
        case SAVING_FRIEND:
            return { ...state, fetchingFriends: true, friendsFetched: false, savingFriend: true, error: null };
        case FRIEND_SAVED:
            return { ...state, fetchingFriends: false, friendsFetched: true, savingFriend: false, friends: action.payload, error: null };
        case DELETING_FRIEND:
            return { ...state, fetchingFriends: true, friendsFetched: false, deletingFriend: true, friendDeleted: false };
        case FRIEND_DELETED:
            return { ...state, fetchingFriends: false, friendsFetched: true, deletingFriend: false, friendDeleted: true, friends: action.payload };
        case ERROR_FETCHING:
            return { ...state, fetchingFriends: false, friendsFetched: false, error: action.payload }
        default:
            return state;
    }
}