import { 
    FETCH_FRIENDS_START,
    FETCH_FRIENDS_SUCCESS,
    FETCH_FRIENDS_FAILURE 
} from '../actions';

const initialState = {
    friends : [],
    isFetchingFriends: false,
    error: ''
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_FRIENDS_START:
            return {
                ...state,
                isFetchingFriends: true,
                error: ''
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

export default rootReducer;