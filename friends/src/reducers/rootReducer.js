const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    savingFriends: false,
    friendsSaved: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCHING_FRIENDS':
            return { ...state, friendsFetched: false, fetchingFriends: true};

        case 'FETCHED_FRIENDS':
            return { ...state, friendsFetched: true, fetchingFriends: false, friends: action.friends, error: null};

        case 'SAVING_FRIENDS':
            return { ...state, savingFriends: true, friendsSaved: false};

        case 'SAVED_FRIENDS':
            return { ...state, savingFriends: false, friendsSaved: true, friends: action.friends, error: null};

        case 'UPDATING_FRIENDS':
            return { ...state, updatingFriends: true, friendsUpdated: false};

        case 'UPDATED_FRIENDS':
            return { ...state, updatingFriends: false, friendsUpdated: true, friends: action.friends, error: null};

        case 'DELETING_FRIENDS':
            return { ...state, deletingFriends: true, friendsDeleted: false};

        case 'DELETED_FRIENDS':
            return { ...state, deletingFriends: false, friendsDeleted: true, friends: action.friends, error: null};

        case 'ERROR':
            return { ...state, error: action.errorMessage};
    
        default:
            return state;
    }
}