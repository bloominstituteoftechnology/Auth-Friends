
import {
    FETCHING,
    SUCCESS,
    FAILURE
} from '../actions';

const initialState = {
    friends: [],
    fetchingFriends: false,
    friendsFetched: false,
    error: null
};

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING:
            return {...state, fetchingFriends:true}
        case SUCCESS:
            return {
                ...state,
                friends:[
                    ...state.friends,
                    ...action.payload
                ],
                fetchingFriends:false,
                friendsFetched:true
            }
        case FAILURE:
            return {
                ...state,
                fetchingFriends:false,
                error: action.payload
            }
        default:
            return state;
    }
}