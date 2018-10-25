import {
    GETTING_FRIENDS,
    GETTING_FRIENDS_SUCCESS,
    GETTING_FRIENDS_FAIL,
    ADDING_FRIEND,
    ADD_FRIEND
} from '../actions';

const initialState = {
    friends: [], gettingFriends: false, error: null, addingFriend: false
};

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETTING_FRIENDS:
            return { ...state, gettingFriends: true };

        case GETTING_FRIENDS_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                gettingFriends: false
            };

        case GETTING_FRIENDS_FAIL:
            return {
                ...state, gettingFriends: false, error: action.payload
            };

        case ADDING_FRIEND:
            return {
                ...state,
                addingFriend: true
            }
        case ADD_FRIEND:
            return {
                ...state,
                friends: action.payload,
                addingFriend: false
            }

        default:
            return state;
    }
}

