import { LOADING, SUCCESS, FAILURE } from '../actions/actions'

const initialState = {
 friends: [],
 loading: false, 
 error: ''
}

export default (state = initialState, action) =>{
    switch(action.type){
        case LOADING:
            return Object.assign({}, state, { loading: true });
        
        case SUCCESS:
            return Object.assign({}, state, {friends: action.payload, loading: false, error: ''});

        case FAILURE:
            return Object.assign({}, state, {error: action.payload, loading: false})
        default:
            return state;
    }
}