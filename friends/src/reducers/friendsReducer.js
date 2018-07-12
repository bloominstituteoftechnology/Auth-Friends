import { FETCHING_FRIENDS, FRIENDS_FETCHED, SAVING_FRIENDS, FRIENDS_SAVED, ERROR, UPDATING_FRIEND, FRIEND_UPDATED, DELETING_FRIEND, FRIEND_DELETED } from "../actions";

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friendName: false,
    friends: [],
    error: null
}

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_FRIENDS:
            return Object.assign({}, state, { fetchingFriends: true });

        case FRIENDS_FETCHED:
            return Object.assign({}, state, { friends: action.payload, fetchingFriends: false, friendsFetched: true });

        case SAVING_FRIENDS:
            return Object.assign({}, state, { savingFriends: true });

        case FRIENDS_SAVED:
            return Object.assign({}, state, { friends: action.payload, savingFriends: false, friendsSaved: true, });

        case UPDATING_FRIEND:
            return Object.assign({}, state, { updatingFriend: true });

        case FRIEND_UPDATED:
            return Object.assign({}, state, { friends: action.payload, updatingFriend: false, friendUpdated: true });

        case DELETING_FRIEND:
            return Object.assign({}, state, { deletingFriend: true });

        case FRIEND_DELETED:
            return Object.assign({}, state, { friends: action.payload, deletingFriend: false, friendDeleted: true });

        case ERROR:
            return Object.assign({}, state, { error: action.payload });

        default:
            return state;
    }
}