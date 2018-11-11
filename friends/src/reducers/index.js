import { FETCHING, FETCHING_FRIENDS, ERROR } from '../actions';


const initialState = {
    friends: [],
    fetching: false,
    error: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING:
            return Object.assign({}, state, { fetching: true });

        case FETCHING_FRIENDS:
            return Object.assign({}, state, { friends: action.friends, fetching: false, error: '' });

        case ERROR:
            return Object.assign({}, state, { error: action.errorMessage, fetching: false });

        default:
            return state;
    }
};