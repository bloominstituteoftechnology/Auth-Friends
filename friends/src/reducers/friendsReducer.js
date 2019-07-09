import {LOGIN, LOGIN_FAIL, FETCHING, FETCH_SUCCESS, FETCH_FAIL, LOGIN_SUCCESS} from '../actions'; 
const initialState = {
    friends: [],
    fetching: false,
    error: '',
    auth: false,
    loggingIn: false
    // Array characters, Boolean fetching, null error.
  };
const friendsReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case LOGIN:
            newState = {...state, loggingIn: true}
            return newState;
        case LOGIN_FAIL:
            newState = {...state, error: action.error};
            return newState;
        case LOGIN_SUCCESS:
            newState = {...state, auth: true, loggingIn: false};
            return newState;
        case FETCHING:
            newState = {...state, fetching: true};
            return newState;
        case FETCH_SUCCESS:
            newState = {...state, friends: action.payload};
            return newState
        case FETCH_FAIL:
            newState = {...state, error: action.error};
            return newState;
        default:
            return state;
    }
}

export default friendsReducer;