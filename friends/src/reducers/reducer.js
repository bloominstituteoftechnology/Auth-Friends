import { LOADING, SUCCESS, FAILED } from '../actions/actions';

const initialState = {
    friends: [],
    loading: false,
    err: '',
    tempUpdate: [],
    updateID: "",
    needsUpdate: false
}

export function reducer(state = initialState , action) {

    switch(action.type) {
        case LOADING:
            return {
                ...state,
                friends: [],
                loading: true,
                err: '',
                needsUpdate: false
            }
        case SUCCESS:
            return{
                ...state,
                friends: action.payload,
                loading: false,
                err: "",
                needsUpdate: false
            }
        case FAILED:
            return {
                ...state,
                loading: false,
                err: action.payload,
                needsUpdate: false
            }
        default:
            return state;
    }
}