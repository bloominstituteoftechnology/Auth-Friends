import { FETCH_FRIEND, FETCHED, ERROR, SAVE_FRIEND, UPDATED, DELETE_FRIEND } from '../actions';
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
                ...state,
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
        case UPDATED:
            return {
                ...state,
                updatingFriend: false,
                friendUpdated: true,
                friends: [...state.friends, ...action.payload]
            }
        case DELETE_FRIEND:
            return {
                ...state,
                deletingFriend: true
            }
        case DELETED:
            return {
                ...state,
                deletingFriend: false,
                friendDeleted: true,
                friends: [...state.friends, ...action.payload]
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