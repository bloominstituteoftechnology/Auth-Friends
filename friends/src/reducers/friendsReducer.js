
import {
    FETCHING_FRIENDS,
    FRIENDS_FETCHED,
    ERROR,
    SAVING_FRIENDS,
    FRIENDS_SAVED } from '../actions/actions';


const initialState = [
    {
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
];

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCHING_FRIENDS:
        return {
            ...state,
            fetchingFriends: true
        };

        case FRIENDS_FETCHED:
        return {
            ...state,
            friendsFetched: true,
            fetchingFriends: false,
            friends: [...action.payload]
        };

        case ERROR:
        return {
            ...state,
            error: action.payload
        };

        case SAVING_FRIENDS:
        return {
            ...state,
            savingFriends: true,
            friendsSaved: false
        }

        case FRIENDS_SAVED:
        return {
            ...state,
            friendsSaved: true,
            savingFriends: false,
            friends: [...state.friends, {
                        name: action.payload.name,
                        age: action.payload.age,
                        email: action.payload.email
                }
            ]
        }

        default:
        return state;
    }
}

