import { IS_FETCHING, FRIENDS_FETCHED, ERROR_FETCHING_FRIENDS } from '../actions/Friends';

const initialState = {
    friends: [],
    fetching: false,
    fetched: false,
    error: null
};

export const friends_reducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_FETCHING:
            return { ...state, fetching: true };
        case FRIENDS_FETCHED:
            //console.log('FRIIIEEENNDDSS: ', action.payload);
            return {
                ...state,
                friends: action.payload,
                fetched: true,
                fetching: false
            };
        case ERROR_FETCHING_FRIENDS:
            return { ...state, fetching: false, error: action.payload };
        default:
            return state;
    }
};
