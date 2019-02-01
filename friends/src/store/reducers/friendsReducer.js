import { 
    FETCH_FRIENDS_START,
    FETCH_FRIENDS_SUCCESS,
    FETCH_FRIENDS_FAILURE 
} from '../actions';

import {
    ADD_FRIEND_START,
    ADD_FRIEND_SUCCESS,
    ADD_FRIEND_ERROR
} from '../actions'

const initialState = {
    friends : [],
    isFetchingFriends: false,
    error: '', 
    isAddingFriend: false,
}

const friendsReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_FRIENDS_START:
            console.log(state)
            return {
                ...state,
                isFetchingFriends: true,
                error: ''
            }
        case ADD_FRIEND_START: 
            return {
                ...state,
                isAddingFriend: true,
                error: ''
            }
        case ADD_FRIEND_SUCCESS:
            return {
                ...state,
                isAddingFriend: false,
                friends: action.payload,
            }
        case FETCH_FRIENDS_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                isFetchingFriends: false,
                error: ''
            }
        case FETCH_FRIENDS_FAILURE: 
            return {
                ...state,
                isFetchingFriends: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default friendsReducer