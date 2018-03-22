import {
    IS_FETCHING, 
    FRIENDS_FETCHED, 
    ERROR_FETCHING_FRIENDS
} from '../actions';

const initialState = {
    fetchingFriends: false, 
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false, 
    updatingFriends: false,
    friendUpdated: false,
    friendUpdated: false,
    deletingFriends: false,
    friendDeleted: false,
    friends: [],
    error: null
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_FETCHING:
            return {...state, fetchingFriends: true };
        case FRIENDS_FETCHED:
            return {...state, 
                    friendsFetched: true,
                    fetchingFriends: false,
                    friends: action.friends 
                };
        case ERROR_FETCHING_FRIENDS:
                return {...state, fetchingFriends: false, error: action.payload };
            default:
                return state;
    }
};