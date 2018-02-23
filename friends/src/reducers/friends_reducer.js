import {IS_FETCHING, FRIENDS_FETCHED, ERROR_FETCHING_FRIENDS, DELETE_FRIEND, A_FRIEND} from '../actions/Friends';

const initialState = {
    friends: [],
    select: {},
    fetching: false,
    fetched: false,
    deleteFriend: false,
    visible:false,
    error: null,
};

export const friends_reducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_FETCHING:
            console.log('Fetching...');
            return {...state, fetching: true};
        case FRIENDS_FETCHED:
            return {
                ...state,
                friends: action.payload,
                fetched: true,
                fetching: false
            };
        case DELETE_FRIEND:
            return {...state, deleteFriend: true, visible:action.visible};
        case A_FRIEND:
            return {...state, select: action.payload};
        case ERROR_FETCHING_FRIENDS:
            return {...state, fetching: false, error: action.payload};
        default:
            return state;
    }
};
