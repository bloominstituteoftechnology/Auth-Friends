
import { FETCHING_FRIENDS, FETCHED_FRIENDS, SAVING_FRIENDS, SAVED_FRIENDS, DELETING_FRIENDS, DELETED_FRIENDS, UPDATED_FRIENDS, UPDATING_FRIENDS } from "../actions";

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
}

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_FRIENDS:
            return {
                ...state,
                fetchingFriends: true,
                friendsFetched: false
            }
        case FETCHED_FRIENDS:
            return {
                ...state,
                friendsFetched: true,
                fetchingFriends: false,
                friends: action.payload
            }
        case SAVING_FRIENDS:
            return {
                ...state,
                savingFriends: true,
                friendsSaved: false
            }
        case SAVED_FRIENDS:
            return {
                ...state,
                savingFriends: false,
                friendsSaved: true,
                friends: action.payload
            }
        case DELETING_FRIENDS:
            return {
                ...state,
                deletingFriend: true,
                friendDeleted: false
            }
        case DELETED_FRIENDS:
            return {
                ...state,
                deletingFriend: false,
                friendDeleted: true,
                friends: action.payload
            }
        case UPDATING_FRIENDS:
            return {
                ...state,
                updatingFriend: true,
                friendUpdated: false
            }
        case UPDATED_FRIENDS:
            return {
                ...state,
                updatingFriend: false,
                friendUpdated: true,
                friends: action.payload
            }

        default:
            return state
    }
}
