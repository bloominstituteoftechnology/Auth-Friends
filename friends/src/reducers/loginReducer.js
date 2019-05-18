import {LOGGING_START, LOGGING_SUCCESS, LOGGING_FAILURE} from '../actions';


const initialState = {
    isLogging: false,
    loginError: null
}

const loginReducer = (state=initialState, action) => {
    switch(action.type) {
        case LOGGING_START:
        return {
            ...state, 
            isLogging: true,
        }

        case LOGGING_SUCCESS:
        return{
            ...state,
            isLogging: false,
            loginError: null
        }


        case LOGGING_FAILURE:
        return {
            ...state,
            isLogging: false,
            loginError: action.payload
        }

        
        default:
        return state;
    }
}

export default loginReducer;