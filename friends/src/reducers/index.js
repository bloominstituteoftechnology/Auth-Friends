import {GET_FRIENDS, GOT_FRIENDS, ERROR, DELETING_FRIEND} from '../actions';

const initialState = {
    getting: false,
    got: false,
    deleting: false,
    friends: [],
    error: null,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FRIENDS:
            return {...state, getting: true}
        case GOT_FRIENDS:
            return {...state, getting: false, got: true, deleting: false, friends: action.payload}
        case DELETING_FRIEND:
            return {...state, deleting: true}
        case ERROR:
            return {...state, error: action.payload}
        default:
            return state;
    }
}   