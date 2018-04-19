import * as actionType from '../actions';

const initialState = {
    friends: [],
    gettingFriends: false,
    error: null
};

export const friendReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionType.GETTING_FRIENDS:
            return {...state, gettingFriends:true};
        case actionType.GET_FRIENDS:
            return {
                ...state,
                friends: action.payload,
                gettingFriends: false,
            };
        case actionType.ERROR:
            return {
                ...state,
                gettingFriends: false,
                error: action.payload
            };
        default:
            return state;
    }
};