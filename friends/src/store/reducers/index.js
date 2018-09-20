import {
    FETCH_START,
    FETCH_COMPLETE,
    FETCH_FAILURE,
    ADD_START,
    ADD_COMPLETE,
    ADD_FAILURE
} from './actions';

const initialState = {
    adding: false,
    fetching: false,
    friends: [],
    error: '',
};

export const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return {...state, fetching: true };
        case FETCH_COMPLETE:
            return {...state, fetching: false, friends: action.payload};
        case FETCH_FAILURE:
            return {...state, fetching: false, error: action.payload};
        case ADD_START:
            return {...state, adding: true };
        case ADD_COMPLETE:
            return {...state, adding: false, friends: action.payload};
        case ADD_FAILURE:
            return {...state, adding: false, error: action.payload};
        default:
            return state;
    }
}