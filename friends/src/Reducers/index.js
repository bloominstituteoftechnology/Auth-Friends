import {FETCHING, FETCHED, ERROR, POSTING} from '../Actions';

const initialState = {
    fetching: false,
    fetched: false,
    friends: [],
    error: null,
    posting: false,
    success: false
};

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING: {
            return{...state, fetching: true}
        }
        case FETCHED: {
            return {...state, fetching: false, fetched: true, friends: action.payload}
        }
        case POSTING: {
            return{ ...state, posting: true}
        }
        case ERROR: {
            return {...state, fetching: false, error: action.payload}
        }
        default: 
        return state;
    }
}

export default friendsReducer