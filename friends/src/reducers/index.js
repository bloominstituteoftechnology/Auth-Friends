import { FETCHING_FRIENDS, FETCHING_SUCCESS, FETCHING_FAILURE, ADDING_FRIENDS, ADDING_SUCCESS, DELETING_FRIENDS, DELETING_SUCCESS } from '../actions'

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
    error: ""
}

function reducer (state = initialState, action) {
    console.log('reducer', action)
    switch(action.type) {
        case FETCHING_FRIENDS:
            return {
            ...state,
            fetchingFriends: true,
            error:
                "uh oh...still loading"
        }
        case FETCHING_SUCCESS:
            return {
            ...state,
            friends: action.payload,
            fetchingFriends: false,
            error: ""
        }
        case FETCHING_FAILURE:
            return {
            ...state,
            fetchingFriends: false,
            error: action.payload
        }
        case ADDING_FRIENDS:
            return {
                ...state,
                savingFriends: true,
                friendsSaved: false
            }
        case ADDING_SUCCESS:
            return {
                ...state,
                savingFriends: false,
                friendsSaved: true
            }
        case DELETING_FRIENDS:
            return {
                ...state,
                deletingFriend: true,
                friendDeleted: false,
                error: ""
            }
        case DELETING_SUCCESS:
            return {
                ...state,
                deletingFriend: false,
                friendDeleted: true,
                error: "",
                friends: action.payload
            }
    default:
        return state
    }
}

export default reducer;