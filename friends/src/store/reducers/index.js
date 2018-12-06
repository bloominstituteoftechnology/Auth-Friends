import { 
    FETCHING_FRIEND_START, 
    FETCHING_FRIEND_SUCCESS, 
    FETCHING_FRIEND_FAILURE
} from "../actions";


const intialState = {
    friends: [],
    error: null,
    isFetchingFriends: false
}

const friendsReducer = (state = intialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default friendsReducer