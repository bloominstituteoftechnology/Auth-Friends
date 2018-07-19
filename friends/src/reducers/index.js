const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    firends: [],
    error: null,
}

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_FRIENDS:
        case FRIENDS_FETCHED:
        case FRIENDS_SAVED:
        case SAVING_FRIENDS:
        case UPDATING_FRIENDS:
        case FRIEND_UPDATED:
        case DELETING_FRIEND:
        case FRIEND_DELETED:
        case ERROR:
    }
}