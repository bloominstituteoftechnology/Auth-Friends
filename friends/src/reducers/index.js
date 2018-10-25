// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Reducers ^^^^^^^^^^^^^^^^^^^^^^^

import {    FETCHING_FRIENDS, 
            FETCHING_FRIENDS_SUCCESS, 
            FETCHING_FRIENDS_FAILURE, 
            friendActions } from '../actions';

const initialState = {
    friends: [],
    isFetching: false,
    error: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_FRIENDS:
            return {
                ...state,
                isFetching: true
            };
        case FETCHING_FRIENDS_SUCCESS:
            return {
                ...state, 
                friends: [...friends, ...action.payload],
                isFetching: false
            };
        case FETCHING_FRIENDS_FAILURE:
            return {
                ...state, 
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
}