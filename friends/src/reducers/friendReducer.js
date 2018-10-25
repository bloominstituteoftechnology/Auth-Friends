import {
    FETCHING_FRIENDS,
    FRIENDS_SUCCESS,
    FRIENDS_FAILURE,
    ADDING_FRIEND,
    NEWFRIEND_SUCCESS,
    NEWFRIEND_FAILURE
} from '../actions/index';

const initialState = {
    friends: [],
    gettingFriends: false,
    addingFriend: false,
    error: null
}


export const friendReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_FRIENDS:
            return {
                ...state,
                gettingFriends: true };
        case FRIENDS_SUCCESS:
            return {
                ...state,
                gettingFriends: false, 
                friends: [
                ...state.friends,
                ...action.payload 
                ]};
        case FRIENDS_FAILURE:
            return {
                ...state,
                gettingFriends: false,
                error: action.payload
            };
        case ADDING_FRIEND:
            return {
                ...state,
                addingFriend: true };
        case NEWFRIEND_SUCCESS:
            return {
                ...state,
                addingFriend: false,
                friends: action.payload
            };
        case NEWFRIEND_FAILURE:
            return {
                ...state,
                addingFriend: false,
                error: action.payload
            };
        default:
        return state;
    }
}