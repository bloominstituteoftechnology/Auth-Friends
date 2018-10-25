// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Reducers ^^^^^^^^^^^^^^^^^^^^^^^

import {    FETCHING_FRIENDS, 
            FETCHING_FRIENDS_SUCCESS, 
            FETCHING_FRIENDS_FAILURE,  } from '../actions';

const initialState = {
    friends: [],
    isFetching: false,
    error: null
}

export const reducer = (state = initialState, action) => {
    console.log('in reducer');
    switch (action.type) {
        case FETCHING_FRIENDS:
            return {
                ...state,
                isFetching: true
            };
        case FETCHING_FRIENDS_SUCCESS:
            return {
                ...state, 
                friends: [...state.friends, ...action.payload],
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