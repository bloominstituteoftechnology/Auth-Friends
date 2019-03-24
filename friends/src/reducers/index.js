import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';

const initialState = {
    friends: [],
    fetchingFriends: false,
    error: null
};

export const rootReducer = (state = initialState, action) => {
    console.log ('rootreducer', action)
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                fetchingFriends: true
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                fetchingFriends: false,
                error: null
            };
        case FETCH_FAILURE:
            return {
                ...state,
                fetchingFriends: false,
                error: action.payload
            };
    default:
        return state;
    }
};



























