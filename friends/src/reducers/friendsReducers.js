import { FETCHING, FETCHED, ERROR } from '../actions';

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

export const friendsReducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING:
            return Object.assign({}, state, { fetching: true });
        case FETCHED:
            return Object.assign({}, state, { friends: [...state.friends, ...action.payload], fetched: true, fetching: false });
        case ERROR:
            console.error(action.payload);
            return Object.assign({}, state, { fetching: false, fetched: false, error: 'Error fetching friends' });
        default:
            return state;
    }
}