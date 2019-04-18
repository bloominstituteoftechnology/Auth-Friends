import { LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS } from '../actions';

const initialState = {
    isLoading: false,
    token: '',
    error: null
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                isLoading: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                token: action.payload
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};
