import {
    LOGGING_IN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    FETCH_FRIENDS,
    FETCH_GOOD,
    FETCH_BAD
} from '../actions';

const initialState = {
    deletingFriend: false,
    fetchingFriends: false,
    friends: [],
    loggingIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: null
}


const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGGING_IN:
            return {
                ...state,
                error: '',
                loggingIn: true
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                error: '',
                loggingIn: false,
            };

        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                loggingIn: false
            }

        case FETCH_FRIENDS:
            return {
                ...state,
                error: '',
                fetchingFriends: true
            }

        case FETCH_GOOD:
            return {
                ...state,
                error: '',
                fetchingFriends: false,
                friends: action.payload
            }

        case FETCH_BAD:
            return {
                ...state,
                error: action.payload,
                fetchingFriends: false,
                
            }

    default: return state;    
    }
    
}

export default rootReducer;