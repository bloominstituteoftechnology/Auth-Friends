import {
    FETCHING_FRIENDS,
    FETCHING_SUCCESS,
    FETCHING_FAILED
} from '../actions'

const initialState = {
    friends: [],
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    error: null
}

export default (state = initialState, action) => {
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
        default:
            return state;
    }
}