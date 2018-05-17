import {} from '../actions';

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
        // case value:
            

        default:
            return state;
    }
}