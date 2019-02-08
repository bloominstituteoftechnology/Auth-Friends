import {
    FETCH_FRIENDS,
    FETCH_SUCCESS,
    ADD_FRIENDS,
    ADD_SUCCESS,
    DELETE_FRIENDS,
    DELETE_SUCCESS,
    UPDATE_FRIENDS,
    UPDATE_SUCCESS,
    ERROR
} from '../Actions';

const initialState = {
    friends: [],
    loading: false,
    error: null
}

export const friendReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_FRIENDS:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                loading: false,
                error: null
            }
        case ADD_FRIENDS:
            return {
                ...state,
                loading: true,
                error: null
            }
        case ADD_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                loading: false,
                error: null
            }
        case DELETE_FRIENDS:
            return {
                ...state,
                loading: true,
                error: null
            }
        case DELETE_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                loading: false,
                error: null
            }
        case UPDATE_FRIENDS:
            return {
                ...state,
                loading: true,
                error: null
            }
        case UPDATE_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                loading: false,
                error: null
            }
        case ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;

    }
}