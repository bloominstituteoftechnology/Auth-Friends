const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    savingFriends: false,
    friendsSaved: false,
    updatingFriends: false,
    friendUpdated: false,
    deletingFriends: false,
    friendDeleted: false,
    friends: [],
    error: null
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type){
        default:
            return state;
    }
};