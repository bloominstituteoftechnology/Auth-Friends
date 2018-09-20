import { FRIENDS_FETCH_START, FRIENDS_FETCH_COMPLETE, FRIENDS_FETCH_FAIL } from '../actions';

const initialState = {
    addingFriend: false,
    friends: [],
    isLoading: false,
    error: ''
};

export const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FRIENDS_FETCH_START:
            return {...state, isLoading: true};
        case FRIENDS_FETCH_COMPLETE:
            return {...state, isLoading: false, friends: action.payload};
        case FRIENDS_FETCH_FAIL: 
            console.log(action.payload);
            return {...state, isLoading: false, error: action.payload};


        default: 
            return state;
    }
}