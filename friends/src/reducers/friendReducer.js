import { IS_FETCHING, ADDING_FRIEND, FRIEND_ADDED, ERROR, FRIENDS_FETCHED, DELETING_FRIEND, FRIEND_DELETED } from '../actions/actions';

const initialState = {
    friends: [],
    fetchingFriends: false,
    friendsFetched: false,
    friendsAdded: false,
    addingFriends: false,
    updatingFriend: false,
    deletingFriend: false,
    friendDeleted: false,
    error: null
}

export const rootReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case IS_FETCHING:
            return { ...state, fetchingFriends: true };
        
        case FRIENDS_FETCHED:
            console.log('friends: ', action.payload);
            return {
                ...state, 
                friendsFetched: true,
                fetchingFriends: false,
                friends: action.payload
            };
        
        case ADDING_FRIEND:
            return { 
                ...state,
                addingFriends: true
            }
        
        case FRIEND_ADDED:
            return {
                ...state,
                friendsAdded: true,
                addingFriends: false,
                friends: action.payload
            }

        case DELETING_FRIEND:
            return {
                ...state,
                deletingFriend: true
            }
        
        case FRIEND_DELETED:
            return {
                ...state,
                friendDeleted: true,
                deletingFriend: false,
                friends: action.payload
            }
        
        case ERROR:
            return {
                ...state,
                fetchingFriends: false,
                error: action.payload
            };


        default:
            return state;
    }
}