const initialState = {
    // fetchingFriends: false,
    // friendsFetched: false,
    // friendsSaved: false,
    // savingFriends: false,
    // updatingFriend: false,
    // friendUpdated: false,
    // deletingFriend: false,
    // friendDeleted: false,
    // friends: [],
    // error: null
    loading: false,
    friendsFetched: false, //friends data loaded success
    friendCreated: false, //friend created success
    friendUpdated: false, //friend updated success
    friendDeleted: false, //friend deleted success
    friends: [],
    error: null

}

const friendsReducer = (state = initialState, action) =>{
    switch(action.type)
    {
        default:
            return state
    }

}

export default friendsReducer;