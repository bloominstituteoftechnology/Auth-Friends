import {FETCHING_FRIENDS, FRIENDS_FETCHED_SUCCESS, FRIENDS_FETCH_ERROR} from '../actions';

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

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_FRIENDS:
        return Object.assign({}, state, {fetchingFriends:true});

        case FRIENDS_FETCHED_SUCCESS:
        return Object.assign({}, state,{
            friends: [...state.friends, ...action.payload],
            fetchingFriends:false
        });

        case FRIENDS_FETCH_ERROR:
        return Object.assign({}, state, {
            fetchingFriends:false,
            error: 'Error Fetching Friends'
        })
        default:
        return state;
    }
};