import { FETCHING, FETCHING_SUCCESS, FETCHING_FAILURE }  from '../actions';


const initialState = {
    fetchingFriends: false,
    friendsFetched: false,

    friendsSaved: false,
    savingFriends: false,

    updatingFriends: false,
    friendUpdated: false,

    deletingFriend: false,
    friendDeleted: false,

    friends: [],
    error: null,
}

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
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
        default:
        return state;
    }
};

