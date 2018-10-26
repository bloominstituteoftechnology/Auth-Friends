import * as actionTypes from '../actions/index';

const initialState = {
    friends:[],
    gettingFriends: false,
    creatingFriend: false,
    error: null
};

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GETTING_FRIENDS:
            return {
                ...state,
                gettingFriends: true
            };
        case actionTypes.FRIENDS_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                gettingFriends: false
            };
        case actionTypes.ERROR:
            return {
                ...state,
                gettingFriends: false,
                creatingFriend: false,
                error: action.payload
            };
        case actionTypes.CREATING_FRIEND:
            return {
                ...state,
                creatingFriend: true
            };
        case actionTypes.CREATE_SUCCESS:
            return {
                ...state,
                creatingFriend: false,
                friends: action.payload
            }
        default:
        return state;
    }
}