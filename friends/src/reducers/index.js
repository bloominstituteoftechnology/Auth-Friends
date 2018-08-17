import React from 'react';

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    friends: [],
    error: null
};

export const rootReducer = ( state = initialState, action) => {
    switch(action.type) {
        case 'FETCHING':
            return {...state, fetchingFriends: true};
        case 'FETCHED':
            return {...state, fetchingFriends: false};
        case 'ADD_FRIEND':
            return {...state, fetchingFriends: false, friends: action.payload};
        case 'ERROR':
            return {...state, fetchingFriends: false};
        default:
            return state;
    }
    
}