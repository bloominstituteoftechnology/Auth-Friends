import axios from 'axios';

const initialState = {
    fetchingFriends: false,
    friendsfetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriends: false,
    friendsUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    error: null
}

export const friendReducer = (state = initialState, action) => {
    
}