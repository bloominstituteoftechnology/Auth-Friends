import { FETCHED_FRIENDS, ADD_FRIEND, FETCHING_FRIENDS, ERROR, SAVING_FRIENDS, FRIENDS_SAVED } from "../actions";

const initialState = {
    friends: [],
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_FRIENDS:
            return Object.assign({}, state, {
                fetchingFriends: action.payload
            })
        case FETCHED_FRIENDS:
            return Object.assign({}, state, {
                friends: state.friends.concat(action.payload),
                fetchingFriends: false
            });
        case ADD_FRIEND:
            return Object.assign({}, state, {
                friends: state.friends.concat(action.payload)
            })
        case SAVING_FRIENDS:
            return Object.assign({}, state, {
                savingFriends: action.payload,
            })
        case FRIENDS_SAVED:
            return Object.assign({}, state, {
                friendsSaved: action.payload,
                savingFriends: false
            })
        case ERROR:
            return Object.assign({}, state, {
                error: action.payload,
                fetchingFriends: false
            })
        default:
            return state;
    }
};