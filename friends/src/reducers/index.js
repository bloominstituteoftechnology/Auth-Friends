import {FETCHING, SUCCESS, FAILURE} from '../actions'

const initialState = {
    friends: [],
    fetching: false,
    success: false,
    error: null,
}

export default (state= initialState, action) => {
    switch(action.type){
        case FETCHING:
        return{...state, fetching: true}
        case SUCCESS:
        return{...state, friends: action.friends, fetching:false};
        case FAILURE:
        return{...state,fetching:false, error:action.payload}
        default:
        return state
    }
}