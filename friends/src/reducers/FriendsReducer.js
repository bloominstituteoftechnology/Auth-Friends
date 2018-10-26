import * as actionTypes from '../actions/index';

const initialState = {
    friends:[],
    gettingFriends: false,
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
                error: action.payload
            };
        default:
        return state;
    }
}