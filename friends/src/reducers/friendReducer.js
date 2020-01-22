import {
    LOGIN_START,
    LOGIN_SUCCESS,
    DELETE_LOGIN,
    GET_DATA_START,
    GET_DATA_SUCCESS,
    GET_DATA_FAIL,
    ADD_NEW_FRIEND
} from '../actions/actions';

const initialState = {
    friends: [],
    loggedIn: false,
    fetchingData: false,
    error: ''
};

export const friendReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
        return {
            ...state,
            loggedIn: true,
            error: ''
        };
        case LOGIN_SUCCESS:
        return {
            ...state,
            loggedIn: false,
            error: ''
        };
        case DELETE_LOGIN:
            return {
                ...state,
                loggedIn: false,
                fetchingData: false,
                error: ''
            }
        case GET_DATA_START:
        return {
            ...state,
            fetchingData: true,
            error: ''
        };
        case GET_DATA_SUCCESS:
        return {
            ...state,
            fetchingData: false,
            friends: action.payload
        };
        case GET_DATA_FAIL:
        return {
            ...state,
            fetchingData: false,
            error: action.payload
        };
        case ADD_NEW_FRIEND:
        return {
            ...state,
            friends: [...state.friends, action.payload]
        };
        default:
            return state;
    }
};