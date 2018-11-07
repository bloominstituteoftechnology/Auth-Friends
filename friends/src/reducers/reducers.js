import {FETCHING, SUCCESS, ERROR} from '../actions/actions';

const initialState = {
    friends: [],
    fetching: false,
    error: ''
}

export const reducer = (state = initialState, action)=>{
    switch(action.type){
        case FETCHING:
            return Object.assign({}, state, {
                fetching: true, 
                error: ''
            });
        case SUCCESS:
            return Object.assign({}, state, {
                friends: action.friends,
                fetching: false,
                error: ''
            })
        case ERROR:
            return Object.assign({}, state, {
                fetching: false,
                error: action.errorMessage
            })
        default:
            return state;
    }
}