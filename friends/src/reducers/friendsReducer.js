
import {
    FETCHING,
    SUCCESS,
    FAILURE
} from '../actions';

const initialState = {
    friends: [],
    friendsFetched: false,
    error: null
};

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING:
            return {...state, friendsFetched:true}
        case SUCCESS:
            return {
                ...state,
                friends:[...state.friends, ...action.payload],
                friendsFetched:false
            }
        case FAILURE:
            return {
                ...state,
                friendsFetched:false,
                error: action.payload
            }
        default:
            return state;
    }
}