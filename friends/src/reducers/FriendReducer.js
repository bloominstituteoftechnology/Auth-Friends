import { FETCHING, FETCHED, ERROR  } from  '../actions';

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

export const friendReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING:
            return Object.assign({}, state, {
                fetchingFriends: true
            });
        case FETCHED:
        return Object.assign({}, state, {
            friends: state.friends.concat(action.payload),
            friendsFetched: true,
            fetchingFriends: false
        });
        case ERROR:
            return Object.assign({}, state, {
                error: action.payload,
                friendsFetched: false,
                fetchingFriends: false
            });
        default:
            return state;
    }
}