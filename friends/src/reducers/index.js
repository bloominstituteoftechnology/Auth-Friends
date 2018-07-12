import { FETCHING_FRIENDS, FRIENDS_FETCHED, ERROR_FETCHING_FRIENDS } from "../actions";

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
        default:
        return state;
    }
}