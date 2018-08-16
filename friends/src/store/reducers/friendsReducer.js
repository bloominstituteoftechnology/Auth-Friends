import { 
    FETCHING_FRIENDS,
    FRIENDS_FETCHED,
    FRIENDS_SAVED,
    SAVING_FRIENDS,
    UPDATING_FRIEND,
    FRIEND_UPDATED,
    DELETING_FRIEND,
    FRIEND_DELETED,
    ERROR
} from '../actions';

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

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_FRIENDS:
            console.log('fetching friends');
            return Object.assign({}, state, {
                fetchingFriends: true
            })
        case FRIENDS_FETCHED:
            console.log('friends fetched');
            return Object.assign({}, state, {
                fetchingFriends: false,
                friendsFetched: true,
                friends: [...state.friends, ...action.payload]
            })
        case ERROR:
            console.log('error fetching friends');
            return Object.assign({}, state, {
                error: action.payload
            })
        default:
            return state
    }
}