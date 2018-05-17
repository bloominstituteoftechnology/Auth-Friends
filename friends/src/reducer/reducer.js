import { SAVING_FRIEND, SAVED_FRIEND, UPDATING_FRIEND, UPDATED_FRIEND, DELETING_FRIEND, ERROR, DELETED_FRIEND, FETCHING_FRIENDS, FETCHED_FRIENDS } from '../actions/'

const initialState = {
    friends: [],
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    error: null,
    name: '',
    age: '',
    email: ''
}

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {

        case SAVING_FRIEND:
            return {
                ...state,
                savingFriends: !state.savingFriends
            }
        case SAVED_FRIEND:
            return {
                ...state,
                friends: action.payload,
                savingFriends: !state.savingFriends,
                friendsSaved: !state.friendsSaved
            }
        case UPDATING_FRIEND:
            return {
                ...state,
                updatingFriend: !state.updatingFriend
            }
        case UPDATED_FRIEND:
            return {
                ...state,
                friends: action.payload,
                updatingFriend: !state.updatingFriend,
                friendUpdated: !state.friendUpdated
            }
        case FETCHING_FRIENDS:
            return {
                ...state,
                fetchingFriends: !state.fetchingFriends
            }
        case FETCHED_FRIENDS:
            return {
                ...state,
                friends: state.friends.concat(action.payload.data),
                fetchingFriends: !state.fetchingFriends,
                friendsFetched: !state.friendsFetched
            }
        case DELETING_FRIEND:
            return {
                ...state,
                deletingFriend: !state.deletingFriend
            }
        case DELETED_FRIEND:
            return {
                ...state,
                deletingFriend: !state.deletingFriend,
                friendDeleted: !state.friendDeleted,
                friends: action.payload,
            }
        case ERROR:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
}