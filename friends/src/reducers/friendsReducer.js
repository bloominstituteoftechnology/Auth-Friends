import { FETCH, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    error: null
};

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH:
            return {
                ...state,
                fetchingFriends: true,
                friendsFetched: false
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                error: null,
                fetchingFriends: false,
                friendsFetched: true,
                friends: action.payload
            };
        case FETCH_FAILURE:
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        default:
            return state;
    }
};
