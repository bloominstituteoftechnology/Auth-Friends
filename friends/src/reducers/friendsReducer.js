import {FETCHING_FRIENDS,
        FETCHED_FRIENDS,
        ADDING_FRIENDS,
        ADDED_FRIENDS,
        UPDATING_FRIENDS,
        UPDATED_FRIENDS,
        DELETING_FRIENDS,
        DELETED_FRIENDS,
        ERROR} from '../actions/actions';

const initialState = {
    friends: [],
    fetchingFriends: false,
    fetchedFriends: false,
    addingFriends: false,
    addedFriends: false,
    updatingFriends: false,
    updatedFriends: false,
    deleteingFriends: false,
    deletedFriends: false,
    error: null,
}

export const friendsReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_FRIENDS:
            return Object.assign({}, state, {
                fetchingFriends: true,
            })
        case FETCHED_FRIENDS:
            return Object.assign({}, state, {
                fetchingFriends: false,
                fetchedFriends: true,
                friends: action.payload
            })
        case ADDING_FRIENDS:
            return Object.assign({}, state, {
                savingFriends: true
            })
        case ADDED_FRIENDS:
            return Object.assign({}, state, {
                savingFriends: false,
                savedFriends: true,
                friends: [...state.friends, action.payload]
            })
        case UPDATING_FRIENDS:
            return Object.assign({}, state, {
                updatingFriends:true
            })
        case UPDATED_FRIENDS:
            return Object.assign({}, state, {
                updatingFriends: false,
                updatedFriends: true,
                friends: [...state.friends, action.payload]
            })
        case DELETING_FRIENDS:
            return Object.assign({}, state, {
                deletingFriends: true
            })
        case DELETED_FRIENDS:
            return Object.assign({}, state, {
                deleteingFriends: false,
                deletedFriends: true,
                friends: [...state.friends, action.payload]
            })
        case ERROR:
            return Object.assign({}, state, {
                fetchedFriends: false,
                deleteFriends: false,
                updatedFriends: false,
                addedFriends: false,
                error: action.payload
            })
        default:
            return state;
    }
}

