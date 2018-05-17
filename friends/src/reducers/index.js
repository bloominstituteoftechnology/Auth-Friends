import { FETCHED_FRIENDS } from "../actions";

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
        case FETCHED_FRIENDS:
            return Object.assign({}, state, {
                friends: state.friends.concat(action.payload)
            });
        default:
            return state;
    }
};