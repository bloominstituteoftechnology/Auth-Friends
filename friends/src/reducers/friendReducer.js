import { FETCHING_FRIENDS, FRIENDS_FETCHED, FETCH_ERROR, ADDING_FRIEND, FRIEND_ADDED, ADDING_ERROR } from '../actions';

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    addingFriend: false,
    friendsSaved: false,   
    savingFriends: false,   
    updatingFriend: false,   
    friendUpdated: false,   
    deletingFriend: false,   
    friendDeleted: false,   
    friends: [],   
    error: null 
};

export const friendReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_FRIENDS:
            return Object.assign({}, state, {fetchingFriends: true});
        
        case FRIENDS_FETCHED:
            return Object.assign({}, state, {
                friends: [...state.friends, ...action.payload],
                fetchingFriends: false
            });

        case FETCH_ERROR:
            return Object.assign({}, state, {
                fetchingFriends: false,
                error: "Error, can't fetch friends"
            });
        
        case ADDING_FRIEND:
            return { ...state, addingFriend: true };
        
        case FRIEND_ADDED:
            return { ...state, addingFriend: false, friends: action.payload };

        case ADDING_ERROR:
            return { ...state, addingFriend: false, error: action.payload };
        
        default:
            return state;
    }
}