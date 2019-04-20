import {LOGIN_POST, LOGIN_SUCCESS, LOGIN_FAIL, LOGINSTATUS_SUCCESS, LOGINSTATUS_FAIL} from '../actions'

const initialState = {
    token: '',
    logging: false,
    error: null,
    loggedIn: false,
}

export const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGINSTATUS_SUCCESS:
            return {
                ...state,
                loggedIn: true,
            }
        case LOGINSTATUS_FAIL:
            return {
                ...state,
                loggedIn: false,
            }
        case LOGIN_POST:
            console.log("login post")
            return {
                ...state,
                logging: true,
                error: null,
            }
        case LOGIN_SUCCESS:
            console.log("login success")
            return {
                ...state,
                token: action.payload,
                logging: false,
                error: null,
                loggedIn: true,
            }
        case LOGIN_FAIL:
            console.log("login fail")
            console.log(action.payload)
            return {
                ...state,
                logging: false,
                error: action.payload,
                loggedIn: false,
            }
        default:
            return state
    }
}