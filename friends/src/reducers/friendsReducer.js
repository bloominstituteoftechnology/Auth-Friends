import { FETCHING_FRIENDS, FRIENDS_FETCHED, SAVING_FRIEND, FRIEND_SAVED, UPDATING_FRIEND, FRIEND_UPDATED, DELETING_FRIEND, FRIEND_DELETED, ERROR } from '../actions';

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
          return {...state, fetchingFriends: false, friendsFetched: true, friends: state.friends.concat(action.payload)};

        case SAVING_FRIEND:
          return {...state, savingFriend: true};
        case FRIEND_SAVED:
          return {...state, savingFriend: false, friendSaved: true, friends: state.friends.concat(action.payload)};

        case UPDATING_FRIEND:
          return {...state, updatingFriend: true};
        case FRIEND_UPDATED:
          return {...state, updatingFriend: false, friendUpdated: true, friends: state.friends.concat(action.payload)};

        case DELETING_FRIEND:
          return {...state, deletingFriend: true};
        case FRIEND_DELETED:
          return {...state, deletingFriend: false, friendDeleted: true, friends: state.friends.concat(action.payload)};

        case ERROR:
          return {...state, error: action.payload}; 
        default:
          return state; 
    }
}