import { 
    FETCHING_FRIEND_START, 
    FETCHING_FRIEND_SUCCESS, 
    FETCHING_FRIEND_FAILURE
} from "../actions";


const initialState = {
    friends: [],
    error: null,
    isFetchingFriends: false
}

const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_FRIEND_START:
            return {
                ...state,
                isFetchingFriends: true,
            };
        case FETCHING_FRIEND_SUCCESS:
            return {
                ...state,
                isFetchingFriends: false,
                friends: action.payload,
            };
        case FETCHING_FRIEND_FAILURE: 
            return {
                ...state,
                isFetchingFriends: false,
                error: action.payload,
            };
        default:
            return state;
    }
}

export default friendsReducer;