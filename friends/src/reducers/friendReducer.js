import {
    ERROR_FETCHING_FRIENDS,
    FETCHING_FRIENDS,
    FRIENDS_FETCHED
} from '../actions';

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    error: null
};

