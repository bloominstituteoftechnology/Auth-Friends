import {LOGIN, LOGIN_FAIL, FETCHING, FETCH_SUCCESS, FETCH_FAIL, LOGIN_SUCCESS, LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL, ADDING_FRIEND, ADDING_FRIEND_FAIL, ADDING_FRIEND_SUCCESS} from '../actions'; 
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
            newState = {...state, auth: {isAuthed: true, userInfo: action.payload}, loggingIn: false};
            // saveUser(action.pad);
            return newState;
        case LOGOUT:
            return state;
        case LOGOUT_SUCCESS:
                newState = {...state, auth: {isAuthed: false, userInfo: undefined}};
                localStorage.removeItem('user');
            return newState;
        case LOGOUT_FAIL:
            return state;
        case FETCHING:
            newState = {...state, fetching: true};
            return newState;
        case FETCH_SUCCESS:
            newState = {...state, friends: action.payload};
            return newState
        case FETCH_FAIL:
            newState = {...state, error: action.error};
            return newState;
        case ADDING_FRIEND:
            return state;
        case ADDING_FRIEND_FAIL:
            newState = {...state, error: action.error};
            return newState;
        case ADDING_FRIEND_SUCCESS:
            newState = {...state, friends: action.payload};
            return newState;
        default:
            return state;
    }
}

export default friendsReducer;