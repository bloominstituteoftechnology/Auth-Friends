import { FETCHING_FRIENDS, FRIENDS_FETCHED, SAVING_FRIEND, FRIEND_SAVED, ERROR } from '../actions';

const initialState = {
        fetchingFriends: false,
        friendsFetched: false,
        friendSaved: false,
        savingFriend: false,
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
          return {...state, fetchingFriends: true};
        case FRIENDS_FETCHED:
          return {...state, fetchingFriends: false, friendsFetched: true, chars: state.chars.concat(action.payload)};
        case SAVING_FRIEND:
          return {...state, savingFriend: true};
        case FRIEND_SAVED:
          return {...state, savingFriend: false, friendSaved: true, chars: state.chars.concat(action.payload)};
        case ERROR:
          return {...state, error: action.payload}; 
        default:
          return state; 
    }
}