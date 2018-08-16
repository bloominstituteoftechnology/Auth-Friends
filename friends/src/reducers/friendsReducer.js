import {FETCHING_FRIENDS,
        FRIENDS_FETCHED, 
        ERROR_FETCHING_FRIENDS
 } from '../actions';

 const initialState = {
    friends: [ ], 
    fetchingFriends: false,
    error: null};

 export const friendsReducer = (state = initialState, action) => {
     console.log('logging state in friendsReducer', state)
     switch (action.type) {
         case FETCHING_FRIENDS:
            return Object.assign({}, state, {fetchingFriends: true});
         case FRIENDS_FETCHED:
            return Object.assign({}, state, { friends: action.payload, fetchingFriends: false });
        case ERROR_FETCHING_FRIENDS:
            return Object.assign({}, state, { error: action.payload });
        default:
            return state;
     }
 }

