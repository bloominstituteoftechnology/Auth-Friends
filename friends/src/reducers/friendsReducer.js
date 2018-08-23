import { FETCH_FRIEND, FETCHED, ERROR } from '../actions';
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
}

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FRIEND:

            return {
                ...state,
                fetchingFriends: true,
            };
        case FETCHED:
            return Object.assign({}, state, {
                fetchingFriends: false,
                friendsFetched: true,
                friends: [...state.friends, ...action.payload]
            })

        case ERROR:
            return {
                ...state,
                error: null,
            };


        default:
            return state;
    }
};