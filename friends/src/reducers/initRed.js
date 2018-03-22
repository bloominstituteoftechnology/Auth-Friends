import { GOTFRIENDS, GETTINGFRIENDS, ADDINGFRIEND, ADDEDFRIEND, ERROR } from '../actions';

const noFriends = {
    friends: [],
    friending: false,
    addingFriend: false,
    error: null,
};

const initRed = ( state = noFriends, action) => {
    switch (action.type) {
        case GETTINGFRIENDS:
            return { ...state, friending: true};
        case GOTFRIENDS:
            return { ...state, friends: action.friends, friending: false, error: null };
        case ERROR:
            return { ...state, error: action.errorMessage};
        case ADDINGFRIEND:
            return { ...state, addingFriend: true};
        case ADDEDFRIEND:
            return { ...state, friends: action.friends, addingFriend: false}

        default:
            return state;
    }
};

export default initRed;