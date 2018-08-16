import {FETCHING_FRIENDS, FRIENDS_FETCHED, POSTING_FRIENDS,
    FRIENDS_POSTED, UPDATING_FRIENDS, FRIENDS_UPDATED, 
    DELETING_FRIENDS, FRIENDS_DELETED, ERROR }  
    from '../actions';


const initialState = {
    fetchingFriends: false,
    friendsFetched: false, // not sure if i need this 
    postingFriends: false, 
    updatingFriends: false,
    friendsUpdated: false,  // not sure if i need this 
    deletingFriends: false,
    friendsDeleted: false,  // not sure if i need this 
    error: null,
    friends: []
}

export const friendsReducer = (state = initialState, action ) => {
    switch(action.type){
        case FETCHING_FRIENDS:
            return {
                ...state,
                fetchingFriends: true,
            }
        case FRIENDS_FETCHED:
            return {
                ...state,
                fetchingFriends: false,
                friends: action.payload
            }
        case POSTING_FRIENDS: 
            return {
                ...state,
                postingFriends: true, 
            }
        case FRIENDS_POSTED:
            return {
                ...state,
                postingFriends: false,
                friends: action.payload,
            }
        case UPDATING_FRIENDS:
            return {
                ...state,
                updatingFriends: true,
            }
        case FRIENDS_UPDATED:
            return {
                ...state, 
                updatingFriends: false, 
                friends: action.payload, 
            }
        case DELETING_FRIENDS:
            return {
                ...state,
                deletingFriends: true,
            }
        case FRIENDS_DELETED:
            return {
                ...state, 
                deletingFriends: false,
                friends: action.payload,
            }
        case ERROR:
            return {
                ...state, 
                error: action.error, 
            }

        default:
            return state; 
    }
}