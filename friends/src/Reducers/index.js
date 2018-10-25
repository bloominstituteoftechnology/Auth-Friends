import {
    FETCHING_FRIENDS,
    FRIENDS_FETCHED,
    FETCHING_FRIENDS_FAILURE
} from '../Actions';

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

export const friendReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_FRIENDS:
            return {...state, fetchingFriends: true};
        case FETCHING_FRIENDS_FAILURE:
            return {...state, fetchingFriends: false, error: null};  //null? 
        case FRIENDS_FETCHED: 
            console.log(action.payload);
            return {...state, 
                friends: [...state.friends, ...action.payload],
                fetchingFriends: false}
        default: 
            return state;
    }
};