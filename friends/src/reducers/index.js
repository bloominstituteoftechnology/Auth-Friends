import { SUCCESS, FAILURE, LOADING } from '../actions';

const initialState = {
    friends: [],
    loading: true,
    error: ''
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type){

        case LOADING:
            return {
                ...state,
                friends: [],
                loading: true,
                error: ''
            }
        
        case SUCCESS:
            return {
                ...state,
                friends: action.payload,
                loading: false,
                error: ''
            }

        case FAILURE: 
            return {
                ...state,
                friends: [],
                loading: false,
                error: action.payload
            }
        default: 
            return state;
    }
}