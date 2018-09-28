import { ADDING_FRIENDS, 
    NEW_FRIEND_ADDED, 
    ERROR_ADDING_FRIEND, 
    GRABBING_FRIENDS, 
    FRIENDS_GRABBED,
    ERROR } from '../actions/friendsActions';

const initialState = {
        addingFriends: false,
        friends: [],
        isLoading: false,
        error: '',
    };
   
export const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GRABBING_FRIENDS:
          return {...state, isLoading: true };
        case FRIENDS_GRABBED:
            return {...state, isLoading: false, friends: action.payload};
        case ERROR:
            console.log("Danger Mr. Robinson! Danger!", action.payload);
            return {...state, isLoading: false, error: action.payload};
        case ADDING_FRIENDS:
            return {...state, addingFriends: true };
        case NEW_FRIEND_ADDED:
            return {...state, addingFriends: false, friends: action.payload};
        case ERROR_ADDING_FRIEND:
            return {...state, addingFriends: false, error: action.payload};
        default:
            return state;
    }
};