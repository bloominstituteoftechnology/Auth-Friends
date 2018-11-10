import { LOADING, SUCCESS, ERROR } from '../actions/friendAction'

const initialState = {
    friends: [],
    error: '',
    loading: false
};

export default (previousState = initialState, action) => {
    switch(action.type){
        case LOADING:
            return Object.assign({}, previousState, {loading: true})
        case SUCCESS: 
            return Object.assign({}, previousState, { friends: action.friends, loading: false, error: '' })
        case ERROR:
            return Object.assign({}, previousState, {error: action.errorMessage, loading: false })
        default:
            return previousState
    }
}