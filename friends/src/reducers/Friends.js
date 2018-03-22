import { POSTED, POSTING, FETCHED, FETCHING, ERROR } from '../actions';

const initialState = {
    friends: [],
    fetching: false,
    posting: false,
    error: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING:
            return { ...state, fetching: true };
        case FETCHED:
            return { ...state, friends: action.friends, fetching: false, error: null };
        case POSTING:
            return { ...state, posting: true };     
        case POSTED:
            return { ...state, friends: action.friends, posting: false, error: null };
        case ERROR:
            return { ...state, error: action.errorMessage };     
        default:
            return state;          
    }
};