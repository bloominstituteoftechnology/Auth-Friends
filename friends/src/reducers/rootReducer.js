import {
    LOGIN_START,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
  } from '../actions'

 const initialState = {
    friends: [],
    error: '',
    errorStatusCode: null,
    fetchingData: false,
    isLoggingIn: false
}

 const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START: {
            return {
                ...state,
                isLoggingIn: true
            }
        }
        case FETCH_DATA_START: {
            return {
                ...state,
                error: '',
                fetchingData: true
            }
        }
        case FETCH_DATA_SUCCESS: {
            return {
                ...state,
                error: '',
                fetchingData: false,
                friends: action.payload
            }
        }
        case FETCH_DATA_FAILURE: {
            return {
                ...state,
                errorStatusCode: action.payload.status
            }
        }
        default:
            return state
    }
}

 export default rootReducer