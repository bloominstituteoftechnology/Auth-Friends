import {FETCHED, FETCHING, ERROR} from '../actions/index';

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
        case FETCHING:
            return Object.assign({}, state, {fetchingFriends: true})

        case FETCHED:
            return Object.assign({}, state, {
                friends: [...state.friends, ...action.payload],
                fetchingFriends: false,
                friendsFetched: true
            })

        case ERROR:
            return Object.assign({}, state, {
                fetchingFriends: false,
                error: "Data fetch failed"
            })
            
        default:
            return state;
    }
}