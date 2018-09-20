import {FETCHING_FRIENDS, FETCH_FRIENDS, UPDATING_FRIEND, UPDATE_FRIEND, DELETING_FRIEND, DELETE_FRIEND, CREATING_FRIEND, CREATE_FRIEND, ERROR} from '../actions';

const initialState = {
    friends: [],
    fetchingFriends: false,
    updatingFriend: false,
    creatingFriend: false,
    deletingFriend: false,
    error: null
};

export const friendsReducer = (state=initialState, action)=> {
    switch (action.type) {
        case FETCHING_FRIENDS:
            return {...state, fetchingFriends: true};
        case FETCH_FRIENDS:
            return {...state, friends: action.payload, fetchingFriends: false};
        case UPDATING_FRIEND:
            return {...state, updatingFriend: true};
        case UPDATE_FRIEND:
            return {...state, friends: action.payload, updatingFriend: false};
        case CREATING_FRIEND:
            return {...state, creatingFriend: true};
        case CREATE_FRIEND:
            return {...state, friends: action.payload, creatingFriend: false};
        case DELETING_FRIEND:
            return {...state, deletingFriend: true};
        case DELETE_FRIEND:
            return {...state, friends: action.payload, deletingFriend: false};
        case ERROR:
            return {...state, error: action.payload};
        default:
            return state;
    }
};