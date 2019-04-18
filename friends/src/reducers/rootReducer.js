import { FRIENDS_FAILURE, FRIENDS_START, FRIENDS_SUCCESS, LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS } from "../actions";

const initialState = {
    friends: [],
    isLoading: false,
    token: '',
    error: null
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                isLoading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                token: action.payload
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case FRIENDS_START:
            return {
                ...state,
                isLoading: true
            }
        case FRIENDS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                friends: action.payload
            }
        case FRIENDS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
};