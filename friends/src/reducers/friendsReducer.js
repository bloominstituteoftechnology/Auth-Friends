import {FETCHING_FRIENDS, FRIENDS_FETCHED, POSTING_FRIENDS,
    FRIENDS_POSTED, UPDATING_FRIENDS, FRIENDS_UPDATED, 
    DELETING_FRIENDS, FRIENDS_DELETED, ERROR }  
    from '../actions';


const initialState = {
    fetchingFriends: false,
    friendsFetched: false, 
    updatingFriend: false,
    friendUpdated: false, 
    deletingFriend: false,
    friendDeleted: false, 
    error: null,
    friends: []
}

export const friendsReducer = (state = initialState, action ) => {
    switch(action.type){

        default:
            return state; 
    }
}