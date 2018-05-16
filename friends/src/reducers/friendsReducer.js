import {
    FETCHING_FRIENDS, 
    FETCHED_FRIENDS,
} from '../actions';

const initialState = {
    friends: [],
    isFetching: false,
    isFetched: false,
}

export const friendsReducer = (state=initialState, {type, friends}) => {
    switch (type) {
        case FETCHING_FRIENDS:
            return {
                ...state, 
                isFetching: true
            }
        case FETCHED_FRIENDS:
            return {
                ...state,
                isFetching: false,
                isFetched: true,
                friends
            }
        default:
            return state
    }
}