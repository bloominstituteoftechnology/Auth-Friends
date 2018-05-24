import {
    FETCHING_FRIENDS,
    FRIENDS_FETCHED,
    CREATING_FRIEND,
    FRIEND_CREATED,
    UPDATING_FRIEND,
    FRIEND_UPDATED,
    DELETING_FRIEND,
    FRIEND_DELETED,
    // SINGLE_FRIEND,
    // TOGGLE_UPDATE_FRIEND,
    ERROR
} from '../ActionCreators/index.js'

const initialState = {
    friends: [] ,
    fetchingFriends: false,
    creatingFriend: false,
    updatingFriend: false,
    deletingFriend: false,
    error: null   
};

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_FRIENDS:
            return Object.assign({}, state, {
                fetchingFriends: true
            });
        case FRIENDS_FETCHED:
            return Object.assign({}, state, {
                friends: action.payload,
                fetchingFriends: false
            });
        case UPDATING_FRIEND:
            return Object.assign({}, state, {
                updatingFriend: true
            })
        case FRIEND_UPDATED:
            return Object.assign({}, state, {
                friends: action.payload,
                updatingFriend: false
            })
        case DELETING_FRIEND:
            return Object.assign({}, state, {
                deletingFriend: true
            })
        case FRIEND_DELETED:
            return Object.assign({}, state, {
                friends: action.payload,
                deletingFriend: false
            })     
        case CREATING_FRIEND:
            return Object.assign({}, state, {
                creatingFriend: true,
            })
        case FRIEND_CREATED:
            return Object.assign({}, state, {
                friends: action.payload,
                creatingFriend: false
            })         
        case ERROR:
            return Object.assign({}, state, { 
                fetchingFriends: false,
                creatingFriend: false,
                deletingFriend: false,
                updatingFriend: false,
                error: action.payload
            });    
        default:
            return state;
    }
};