import { GOTFRIENDS, GETTINGFRIENDS, ERROR, NEWFRIENDS } from '../actions';

const noFriends = {
    friends: {
        id: number,
        name: '',
        age: number,
        email: ''
    },
    friending: false,
    error: null,
};

export default ( state = noFriends, action) => {
    switch (action.type) {
        case GETTINGFRIENDS:
            return { ...state, friending: true};
        case ERROR:
        return { ...state, error: action.errorMessage};
        case NEWFRIENDS:
        return { ...state, value: action.input };
        case GOTFRIENDS:
        return { ...state, friends: action.friends, friending: false, error: null };
        default:
        return state;
    }
};