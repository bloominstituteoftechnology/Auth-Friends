import {PENDING, SUCCESS, ERRORS} from '../actions';

const initialState = {
    friends: [],
    pending: false,
    success: false,
    error: null
}


export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case PENDING:
            return {...state, pending: true};
        case SUCCESS:
        console.log(action.payload) 
            return {...state, success: true, pending: false, friends: action.payload};
        case ERRORS:
            return {...state, pending: true};

        default:
        return state;
    }
};