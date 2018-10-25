import { FETCHING_FRIENDS, FRIENDS_FETCH_SUCCESS, FRIENDS_FETCH_FAILURE, FRIEND_ADDED } from "../actions";

// need my action types imported from '../actions';

const initialState = {

    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [
         {
            id: 1,
            name: 'Joe',
            age: 24,
            email: 'joe@lambdaschool.com',
        } 
    ],
    error: null

}

export const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
    
    case FETCHING_FRIENDS:
        return {...state, fetchingFriends: true};

    case FRIENDS_FETCH_SUCCESS:
        return {...state,
                fetchingFriends: false,
                friends: [...state.friends, ...action.payload]
        };

    case FRIENDS_FETCH_FAILURE:
        return{...state, fetchingFriends: false, error: action.payload};


    case FRIEND_ADDED:
    console.log(action);
    console.log('state:', state.friends);
        return {...state, friends: [...action.payload] }

    default:
        return state;
    }
};