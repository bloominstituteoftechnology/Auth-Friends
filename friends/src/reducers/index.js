import { FETCHING_FRIENDS, FETCHED_FRIENDS, SAVING_FRIENDS, SAVED_FRIENDS, UPDATING_FRIEND, UPDATED_FRIEND, DELETING_FRIEND, DELETED_FRIEND, ERROR } from '../actions';

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

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_FRIENDS:
        return Object.assign({}, state, { fetchingFriends: true })
        
        case FETCHED_FRIENDS:
        return Object.assign({}, state, {fetchingFriends: false, friendsFetched: false, friends: state.friends.concat(action.payload) })
       
        case SAVING_FRIENDS:
        return Object.assign({}, state, { savingFriends: true })
        
        case SAVED_FRIENDS:
        return Object.assign({}, state, { savingFriends: false, friendsSaved: true, friends: state.friends.concat(action.payload) })

        case UPDATING_FRIEND:
        return Object.assign({}, state, { updatingFriend: true })

        case UPDATED_FRIEND:
        return Object.assign({}, state, { updatingFriend: false, friendUpdated: true, friends: state.friends.concat(action.payload)})

        case DELETING_FRIEND:
        return Object.assign({}, state, { deletingFriend: true })

        case DELETED_FRIEND:
        return Object.assign({}, state, { deletingFriend: false, friendDeleted: true, friends: state.friends.concat(action.payload)})

        default:
        return state;
    }
};