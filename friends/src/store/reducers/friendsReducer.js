import {  } from '../actions';

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    friends: [],
    error: null
}

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}