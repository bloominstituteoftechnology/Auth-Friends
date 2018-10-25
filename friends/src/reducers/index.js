import {
    FETCHING_FRIENDS,
    FETCHING_SUCCESS,
    FETCHING_FAILED,
    ADD_FRIEND,
    ADD_SUCCESS,
    ADD_FAILED 
} from '../actions'

const initialState = {
    friends: [],
    fetchingFriends: false,
    friendsFetched: false,
    savingFriends: false,
    friendsSaved: false,
    error: null
}

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_FRIENDS:
            return {...state, fetchingFriends: true}
        case FETCHING_SUCCESS:
            return {
                ...state,
                friendsFetched: true,
                fetchingFriends: false,
                friends: action.payload
            }
        case FETCHING_FAILED:
            return {
                fetchingFriends: false,
                error: action.payload
            }
        case ADD_FRIEND:
            console.log("inside friends reducer", state)
            return {
                savingFriends: true,
                ...state
            }
        case ADD_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                savingFriends: false,
            }
        
        default:
            return state;
    }
}
