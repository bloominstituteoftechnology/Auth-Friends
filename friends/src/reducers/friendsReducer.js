import {FETCHING_FRIENDS, FETCHED_FRIENDS} from '../actions';

const initialState = {
    friends: [],
    fetching: false,
    fetched: false,
}

export const friendsReducer = (state=initialState, {type, friends}) => {
    switch (type) {
        case FETCHING_FRIENDS:
            return {
                ...state, 
                fetching: true
            }
        case FETCHED_FRIENDS:
            return {
                ...state,
                fetching: false,
                fetched: true,
                friends
            }
        default:
            return state
    }
}