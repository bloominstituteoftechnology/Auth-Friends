import { FETCHING, FETCHED, SAVING, SAVED, UPDATING, UPDATED, DELETING,DELETEDERROR, } from '../actions';

const initialState = {
    friends: [],
    fetchingFriends: false,
    friendsFetched: false,    
    savingFriends: false,
    friendsSaved: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    error: null
}

export const friendsReducer = (state = initialState, action) => {

}