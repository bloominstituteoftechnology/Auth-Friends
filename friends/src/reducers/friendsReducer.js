// import our aliased action names from actions here

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
    error: null,
};

export const friendsReducer = (state = initialState, action) => {
    switch(action.type) {

        default: 
            return state;
    }
}

