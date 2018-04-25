import { GET_FRIENDS, GET_A_FRIEND, ADD_FRIEND, UPDATE_FRIEND, DELETE_FRIEND } from '../actions';

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

export const reducer = (state = initialState, action) => {
    return {}
}