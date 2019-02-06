import { FETCHING_FRIENDS } from '../actions'

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

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_FRIENDS:
            return {
            ...state,
            fetchingFriends: true
        }
    default:
        return state
    }
}