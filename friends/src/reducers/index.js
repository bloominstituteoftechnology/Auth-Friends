import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from '../actions';

const initialState = {
    friends: [],
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false, 
    savingFriends: false, 
    updatingFriend: false,
    friendUpdated: false,
    deleteFriend: false,
    friendDeleted: false, 
    error: null,
};

export const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START: 
            return Object.assign({}, state, {
                fetchingFriends: true,
                friendsFetched: false
            });
        case FETCH_SUCCESS: 
            return Object.assign({}, state, { 
                friends: [...state.friends, ...action.payload],
                fetchingFriends: false,
                friendsFetched: true
            })
        case FETCH_ERROR: 
            return Object.assign({}, state, {
                fetchingFriends: false,
                friendsFetched: false,
                error: action.payload
            })
        default: 
            return state;
    }
}