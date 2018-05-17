import FETCHING_FRIENDS from './ActionCreators/index.js';
import FRIENDS_FETCHED from './ActionCreators/index.js';
import ERROR from './ActionCreators/index.js';

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    savingFriends: false,
    friendsSaved: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [] ,
    error: null   
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FRIENDS_FETCHED:
            return Object.assign({}, state, {
                friends: state.friends.concat(action.payload),
                fetchingFriends: false
            })
        case FETCHING_FRIENDS:
            return Object.assign({}, state, {
                fetchingFriends: true
            })
        case ERROR:
            return Object.assign({}, state, {
                fetchingFriends: false
            })    
        default:
            return state;
    }
}