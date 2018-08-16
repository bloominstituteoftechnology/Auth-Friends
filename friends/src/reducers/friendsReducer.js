import {FRIENDS_FETCHED, 
        ERROR_FETCHING_FRIENDS
 } from '../actions';

 const initialState = {friends: [ { testing: 'testFriend' } ], fetching: false};

 export const friendsReducer = (state = initialState, action) => {
     console.log('logging state in friendsReducer', state)
     switch (action.type) {
         case FRIENDS_FETCHED:
            return;
        case ERROR_FETCHING_FRIENDS:
            return;
        default:
            return state;
     }
 }

