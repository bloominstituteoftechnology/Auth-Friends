import { LOADING, SUCCESS, FAILED } from '../actions/actions';

const initialState = {
    friends: [],
    loading: false,
    err: ''
}

export function reducer(state = initialState , action) {
    console.log("state in reducer:", state)

    switch(action.type) {
        case LOADING:
            return {
                ...state,
                friends: [],
                loading: true,
                err: ''
            }
        case SUCCESS:
            return{
                ...state,
                friends: action.payload,
                loading: false,
                err: ""
            }
        case FAILED:
            return {
                ...state,
                loading: false,
                err: action.payload
            }
        default:
            return state;
    }
}