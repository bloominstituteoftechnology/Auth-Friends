import {
    GET_FRIENDS_START,
    GET_FRIENDS_SUCCESS,
    GET_FRIENDS_ERROR,
    SET_LOADING,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from "../actions";
import { initialState } from "../state";

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FRIENDS_START: {
            return {
                ...state
            };
        }
        case GET_FRIENDS_SUCCESS: {
            return {
                ...state,
                friends: [...state.friends, ...action.payload.data]
            };
        }
        case GET_FRIENDS_ERROR: {
            return { ...state, error: action.payload };
        }
        case LOGIN_START: {
            return {
                ...state
            };
        }
        case LOGIN_SUCCESS: {
            localStorage.setItem('token', action.payload)
            return {
                ...state,
                isLoggedIn: true
            };
        }
        case LOGIN_ERROR: {
            return { ...state, error: action.payload };
        }
        case SET_LOADING: {
            return {
                ...state,
                isLoading: !state.isLoading
            };
        }
        default: {
            return state;
        }
    }
};
