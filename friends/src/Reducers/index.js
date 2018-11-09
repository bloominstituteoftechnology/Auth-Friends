import { FETCHING, FETCHED, ADDING, ADDED, UPDATING, UPDATED, DELETING, DELETED, ERROR } from '../Actions';

const initialState = {
    fetchingFriends: false,
    addingFriend: false,
    updatingFriend: false,
    deletingFriend: false,
    friends: [],
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCHING:
            return {...state, fetchingFriends: true};
        case FETCHED:
            return {
                ...state,
                fetchingFriends: false,
                friends: [...state.friends, ...action.payload]
            }
        case ADDING:
            return {...state, addingFriend: true}
        case ADDED:
            return {
                ...state,
                addingFriend: false,
                friends: [...action.payload]
            }
        case UPDATING:
            return {...state, updatingFriend: true}
        case UPDATED:
            return {
                ...state,
                updatingFriend: false,
                friends: [...action.payload]
            }
        case DELETING:
            return{...state, deletingFriend: true}
        case DELETED:
            return{
                ...state,
                deletingFriend: false,
                friends: [...action.payload]
            }
        case ERROR:
            return {
                fetchingFriends: false,
                addingFriend: false,
                updatingFriend: false,
                deletingFriend: false,
                error: action.payload
            }
        default: 
            return state;
    }
}