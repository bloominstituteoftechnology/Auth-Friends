import { IS_FETCHING, ADDING_FRIEND, FRIEND_ADDED, ERROR, FRIENDS_FETCHED } from '../actions';

const initialState = {
    friends: [],
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
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
                friends: Object.keys(action.payload)
            };
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