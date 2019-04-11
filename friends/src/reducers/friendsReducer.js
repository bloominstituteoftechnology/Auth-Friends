import { LOADING, GET_FRIENDS, ERROR } from '../actions/friendsActions';

const initialState = {
    loading: false,
    friendsSaved: false,
    friends: [],
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case LOADING:
            return {...state, loading: true};
        case GET_FRIENDS:
            return {...state, friends: action.friends, loading: false};
        case ERROR:
            return {...state, error: action.errorMessage, loading: false};    
        default:
            return state;
    }
}