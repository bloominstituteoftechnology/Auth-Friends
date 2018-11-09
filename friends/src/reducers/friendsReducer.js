import {FETCHING, SUCCESS, FAILURE, ADDING_FRIEND, UPDATING_FRIEND, DELETING_FRIEND } from '../actions/index';

let initialState = {
    friends: [],
    fetching: true,
    error: '',
}

export const friendsReducer = (previousState = initialState, action) => {
    switch(action.type) {
        case FETCHING: 
            return Object.assign({}, previousState, {fetching: true, error: ''});
        case SUCCESS:
            return Object.assign({}, previousState, {friends: action.payload, fetching: false,  error: ''});
        case FAILURE:
            return previousState;
        case ADDING_FRIEND:
            return previousState;
        case UPDATING_FRIEND:
            return previousState;
        case DELETING_FRIEND:
            return previousState;

        default: return previousState;
    }
}