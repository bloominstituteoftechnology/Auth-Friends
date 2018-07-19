import { FETCHING_FRIENDS, FRIENDS_FETCH_SUCCESS, FRIENDS_FETCH_ERROR } from './friendAction';

const initialState = { friends: [], fetchingFriends: false, error: '' };

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_FRIENDS:
        return Object.assign({}, state, { fetchingFriends: true });
        case FRIENDS_FETCH_SUCCESS:
        return Object.assign({}, state, {
            friends: [...state, ...action.payload],
            fetchingFriends: false,
        })
        case FRIENDS_FETCH_ERROR:
        return Object.assign({}, state, {
            fetchingFriends: false,
            error: 'Error fetching friends'
        })
        default:
        return state;
    }
};