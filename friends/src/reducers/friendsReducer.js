import {
    FETCHING_FRIENDS,
    FETCHING_FRIENDS_SUCCESS,
    FETCHING_FRIENDS_FAILURE,
    CREATING_FRIEND,
    CREATING_FRIEND_SUCCESS,
    CREATING_FRIEND_FAILURE,
    DELETING_FRIEND,
    DELETING_FRIEND_SUCCESS,
    DELETING_FRIEND_FAILURE
} from '../actions';

const initialState = {
    friends: [],

    // get friends
    fetchingFriends: false,

    // create new friend
    creatingFriend: false,

    // delete friend
    deleteFriend: false,

    error: null
}

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETING_FRIEND_FAILURE:
            return {...state, deleteFriend: false, error: action.payload};
        case DELETING_FRIEND_SUCCESS:
            return {
                ...state,
                deleteFriend: false,
                friends: action.payload
            };
        case DELETING_FRIEND:
            return {...state, deleteFriend: true};
        case FETCHING_FRIENDS:
            return {...state, fetchingFriends: true};
        case FETCHING_FRIENDS_SUCCESS:
            return {
                ...state,
                fetchingFriends: false,
                friends: action.payload
            };
        case FETCHING_FRIENDS_FAILURE:
            return {...state, fetchingFriends: false, error: action.payload};
        case CREATING_FRIEND:
            return {...state, creatingFriend: true};
        case CREATING_FRIEND_SUCCESS:
            return {
                ...state,
                creatingFriend: false,
                friends: action.payload
            };
        case CREATING_FRIEND_FAILURE:
            return {...state, creatingFriend: false, error: action.payload};
        default:
            return state;
    }
}
