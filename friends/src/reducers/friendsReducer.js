import { 
    FETCHING, 
    FETCHING_SUCCESS, 
    FETCHING_FAILURE,
    ADDING_FRIEND,
    ADDING_FRIEND_SUCCESS,
    ADDING_FRIEND_FAILURE,
}  from '../actions';


const initialState = {
    fetchingFriends: false,
    friendsFetched: false,

    savingFriends: false,

    // updatingFriends: false,
    // friendUpdated: false,

    // deletingFriend: false,
    // friendDeleted: false,

    friends: [],
    error: null,
}

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        // Getting friends List
        case FETCHING:
        return {
            ...state,
            fetchingFriends: true
        };
        case FETCHING_SUCCESS:
        return {
            ...state,
            error: null,
            fetchingFriends: false,
            friends: action.payload,
        };
        case FETCHING_FAILURE:
        return {
            ...state,
            fetchingFriends: false,
            error: action.payload,
        };
        // End Getting Friends List

        // Adding Friend to List
        case ADDING_FRIEND:
        return {
            ...state,
            savingFriends: true,
        };
        case ADDING_FRIEND_SUCCESS:
        return {
            ...state,
            error: null,
            savingFriends: false,
            friends: action.payload
        };
        case ADDING_FRIEND_FAILURE:
        return {
            ...state,
            savingFriends: false,
            error: action.payload
        };
        // End of Adding Friend to List
        default:
        return state;
    }
};

