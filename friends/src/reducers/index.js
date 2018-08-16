import { FETCHING_FRIENDS, FETCHED_FRIENDS, SAVING_FRIENDS, SAVED_FRIENDS } from "../actions";

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
    switch(action.type){
        case FETCHING_FRIENDS: 
            return {
                ...state,
                fetchingFriends: true,
                friendsFetched: false
            }
        case FETCHED_FRIENDS: 
            return {
                ...state,
                friendsFetched: true,
                fetchingFriends: false,
                friends: action.payload
            }
        case SAVING_FRIENDS: 
            return {
                ...state,
                savingFriends: true,
                friendsSaved: false
            }
        case SAVED_FRIENDS: 
            return {
                ...state,
                savingFriends: false,
                friendsSaved: true,
                friends: action.payload
            }

        default: 
            return state
    }
}