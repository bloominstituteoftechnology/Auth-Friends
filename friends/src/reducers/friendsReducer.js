import { FETCHING, FETCHED, ERROR, SAVING, SAVED } from '../actions';

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
    switch(action.type) {
        case FETCHING:
            return {
                ...state,
                fetchingFriends: true,
                friendsFetched: false
            }

        case FETCHED: 
            return {
                ...state,
                friendsFetched: true,
                fetchingFriends: false,
                friends: action.payload
            }

        case ERROR: 
            return {
                ...state,
                fetchingFriends: false,
                error: "Error occured, cannot fetch requested data"
            }
        
        case SAVING:
            return {
                ...state,
                savingFriends: true,
                friendsSaved: false
            }
        
        case SAVED:
            return {
                ...state,
                savingFriends: false,
                friendsSaved: true,
                friends: action.payload
            }

        default:
            return state;
    }
}