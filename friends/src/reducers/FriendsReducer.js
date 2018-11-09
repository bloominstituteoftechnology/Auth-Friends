import { LOADING, GET_FRIENDS, ERROR, ADD_FRIEND, UPDATE_FRIEND, DELETE_FRIEND } from '../actions/actions';

const initialState = {
    loading: false,
    error: '',
    friends: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case LOADING:
            return Object.assign({}, state, {loading: true})
        case GET_FRIENDS:
            return Object.assign({}, state, {loading: false, error: '', friends: action.friends})
        case ERROR:
            return Object.assign({}, state, {loading: false, error: action.error})
        case ADD_FRIEND:
            return Object.assign({}, state, {loading: false, error: '', friends: action.friends})
        case UPDATE_FRIEND:
            return Object.assign({}, state, {loading: false, error: '', friends: action.friends})
        case DELETE_FRIEND:
            return Object.assign({}, state, {loading: false, error: '', friends: action.friends})
        default:
            return state
    }
}