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

        case ERROR:
            return {...state, error: action.errorMessage, loading: false};    
        default:
            return state;
    }
}