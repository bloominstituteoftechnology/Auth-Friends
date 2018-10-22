import {GET_FRIENDS, GOT_FRIENDS, ERROR} from '../actions';

const initialState = {
    getting: false,
    got: false,
    friends: [],
    error: null,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FRIENDS:
            return {...state, getting: true}
        case GOT_FRIENDS:
            return {...state, getting: false, got: true, friends: action.payload}
        case ERROR:
            return {...state, error: action.payload}
        default:
            return state;
    }
}   