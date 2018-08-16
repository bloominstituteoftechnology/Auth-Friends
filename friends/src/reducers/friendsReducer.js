import {FRIENDS_FETCHED, 
        ERROR_FETCHING_FRIENDS
 } from '../actions';

 const initialState = {friends: [], fetching: false};

 export const friendsReducer = (state = initialState, action) => {
     switch (action.type) {
         case FRIENDS_FETCHED:
            return;
        case ERROR_FETCHING_FRIENDS:
            return;
        default:
            return state;
     }
 }

