import {
    FETCHING_FRIENDS,
    FRIEND_FETCH_SUCCESS,
    FRIEND_FETCH_ERROR,
} from '../actions/index'

export const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    error: null,
}

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_FRIENDS:
            return {
                ...state,
                fetchingFriends: true,
            }
        case FRIEND_FETCH_SUCCESS:
            return {
                ...state,
                fetchingFriends: false,
                friends: [...state.friends, ...action.payload],
            }
        case FRIEND_FETCH_ERROR:
            return {
                ...state,
                fetchingFriends: false,
                error: action.payload,
            }
        default:
            return state
    }
}
