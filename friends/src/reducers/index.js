import { GET_FRIENDS, GET_A_FRIEND, ADD_FRIEND, UPDATE_FRIEND, DELETE_FRIEND, ERROR } from '../actions';

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
    switch(action.type) {
        case(GET_FRIENDS):
            return Object.assign({}, state, { friends: action.payload, friendsFetched: true,
                                              error: null });
        case(ERROR):
            return Object.assign({}, state, { error: action.error });
        default:
            return state
    }
}