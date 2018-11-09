import { ADD_FRIEND, FETCHING_FRIENDS, FRIENDS_FETCHED, ERROR } from '../actions/friendsActions';

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
    error: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_FRIEND:
            return Object.assign({}, state, {
                friends: action.payload,
            })
        case FETCHING_FRIENDS:
            return Object.assign({}, state, )
        case FRIENDS_FETCHED:
            return Object.assign({}, state, {
                friends: action.payload,
                loading: false,
                error: '',
            })
        default:
            return state;
    }
};