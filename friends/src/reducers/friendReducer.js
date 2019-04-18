import { FRIENDS_FAILURE, FRIENDS_START, FRIENDS_SUCCESS } from '../actions';

const initialState = {
    friends: [],
    isLoading: false,
    error: null
};

export const friendReducer = (state = initialState, action) => {
    switch (action.type) {
        case FRIENDS_START:
            return {
                ...state,
                isLoading: true
            };
        case FRIENDS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                friends: action.payload
            };
        case FRIENDS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};
