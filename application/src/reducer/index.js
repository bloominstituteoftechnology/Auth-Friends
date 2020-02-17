
export const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_START': {
            return {
                ...state
            };
        }
        case 'LOGIN_SUCCESS': {
            localStorage.setItem('token', action.payload)
            return {
                ...state,
                isLoggedIn: true
            };
        }
        case 'LOGIN_ERROR': {
            return { ...state, error: action.payload };
        }
        case 'SET_LOADING': {
            return {
                ...state,
                isLoading: !state.isLoading
            };
        }
        default: {
            return state
        }
    }
}