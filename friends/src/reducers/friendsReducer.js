
import {
    FETCHING_FRIENDS,
    FRIENDS_FETCHED,
    ERROR,
    FRIENDS_SAVED, 
    FRIEND_DELETED} from '../actions/actions';


const initialState = [
    {
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
    }
];

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCHING_FRIENDS:
        return {
            ...state,
            fetchingFriends: true
        };

        case FRIENDS_FETCHED:
        return {
            ...state,
            friendsFetched: true,
            fetchingFriends: false,
            friends: [...action.payload]
        };

        case ERROR:
        return {
            ...state,
            error: action.payload
        };

        case FRIENDS_SAVED:
        return {
            ...state,
            friendsSaved: true,
            friends: [...action.payload]
        }

        case FRIEND_DELETED:
        return {
            ...state,
            friendDeleted: true,
            friends: [...action.payload]
        }

        default:
        return state;
    }
}

