import { PENDING_FRIENDS, SUCCESS_FRIENDS, ERROR_FRIENDS} from '../actions/index';

const initialState = {
    fetchingFriends: false,
    friendsfetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriends: false,
    friendsUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    error: null
}

export const friendReducer = (state = initialState, action) => {
    switch(action.type) {
        case PENDING_FRIENDS:
            return Object.assign({}, state, { fetchingFriends: true });
        case SUCCESS_FRIENDS:
            return Object.assign({}, state, { 
                friendsFetched: true, 
                friends: [...state.friends, action.payload]
            });
        case ERROR_FRIENDS:
            return Object.assign({}, state, {
                error: action.payload
            });
        default: 
            return state;
    }
}