import { FETCH_FRIEND, FETCHED, ERROR, SAVE_FRIEND } from '../actions';
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
    savedFriends: [],
    error: null
}

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FRIEND:

            return {
                ...state,
                fetchingFriends: true,
            }
        case FETCHED:
            return Object.assign({}, state, {
                fetchingFriends: false,
                friendsFetched: true,
                friends: [...state.friends, ...action.payload]
            })
        case SAVE_FRIEND:
            return {
                friendsFetched: true,
                savingFriends: true,
            }
        case SAVED:
            return Object.assign({}, state, {
                savingFriend: false,
                friendsSaved: true,
                savedFriends: [...state.friends, ...action.payload],
            })
        case UPDATE_FRIEND:
            return {
                ...state,
                updatingFriend: true,

            }

        case ERROR:
            return {
                ...state,
                error: null,
            };


        default:
            return state;
    }
};