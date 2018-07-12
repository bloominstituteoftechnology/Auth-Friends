import { FETCHING_FRIENDS, FRIENDS_FETCHED, ERROR_FETCHING_FRIENDS, POSTING_FRIEND, POST_FRIEND, ERROR_POSTING_FRIEND } from "../actions";

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,

    friendsSaved: false,
    savingFriends: false,

    updatingFriend: false,
    friendUpdated: false,

    deletingFriend: false,

    friends: [],
    error: null
};
export default (state = initialState, action) => {
    console.log(action.type);
    switch(action.type) {
        case FETCHING_FRIENDS:
        return {
            ...state,
            fetchingFriends: true,
        }
        case FRIENDS_FETCHED:
        return {
            ...state,
            fetchingFriends: false,
            friendsFetched: true,
            friends: action.payload
        }
        case ERROR_FETCHING_FRIENDS:
        return {
            ...state,
            error: action.payload
        }
        case POSTING_FRIEND:
        return {
            ...state,
            savingFriends: true,
            friendsSaved: false,
        }
        case POST_FRIEND:
        return {
            ...state,
            savingFriends: false,
            friendsSaved: true,
            friends: action.payload
        }
        case ERROR_POSTING_FRIEND:
        return {
            ...state,
            error: action.payload
        }
        default:
        return state;
    }
}