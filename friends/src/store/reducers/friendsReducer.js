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

export const friendsReducer = (state = initialState, action) => {
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
        case SAVING_FRIENDS:
            console.log('saving friends');
            return Object.assign({}, state, {
                savingFriends: true
            })
        case FRIENDS_SAVED:
            console.log('friends saved');
            return Object.assign({}, state, {
                savingFriends: false,
                friendsSaved: true,
                friends: [...state.friends, ...action.payload]
            })
        case UPDATING_FRIEND:
            console.log('updating friend');
            return Object.assign({}, state, {
                updatingFriend: true
            })
        case FRIEND_UPDATED:
            console.log('friend updated');
            return Object.assign({}, state, {
                updatingFriend: false,
                friendUpdated: true,
                friends: [...action.payload]
            })
        case DELETING_FRIEND:
            console.log('deleting friend');
            return Object.assign({}, state, {
                deletingFriend: true
            })
        case FRIEND_DELETED:
            console.log('friend deleted');
            return Object.assign({}, state, {
                deletingFriend: false,
                friendDeleted: true,
                friends: [...action.payload]
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