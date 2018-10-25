import { FETCHING_FRIENDS, FETCHING_FRIENDS_SUCCESS, FETCHING_FRIENDS_FAILURE, SAVING_FRIENDS, SAVING_FRIENDS_SUCCESS } from "../actions";

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
    switch(action.type) {
        case FETCHING_FRIENDS:
            return {...state, fetchingFriends: true};

        case FETCHING_FRIENDS_SUCCESS:
            return {...state, fetchingFriends: false, friends: [...state.friends, ...action.payload]};

        case FETCHING_FRIENDS_FAILURE:
            return {...state, fetchingFriends: false, error: action.payload};

        case SAVING_FRIENDS:
            return {...state, savingFriends: true};

        case SAVING_FRIENDS_SUCCESS:
            return {...state, savingFriends: false, friends: [...action.payload]}
        default: 
            return state;
    }
}