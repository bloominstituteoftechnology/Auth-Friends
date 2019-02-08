import { UPDATING, FETCH_SUCCESS, FETCH_FAILURE, ADD_FRIEND, ADD_FAILURE, DELETE_FRIEND, DELETE_FAILURE, UPDATE_SUCCESS, UPDATE_FAILURE } from '../actions';

const initialState = {
    friends: [],
    updating: true,
    error: null,
};

export const friendsReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATING:
            return { ...state, updating: true, error: state.error };
        case FETCH_SUCCESS:
            return { ...state, friends: action.payload, updating: false, error: null };
        case FETCH_FAILURE:
            return { ...state, updating: false, error: action.payload };
        case ADD_FRIEND:
            return { ...state, friends: action.payload, updating: false, error: null };
        case ADD_FAILURE:
            return { ...state, updating: false, error: action.payload };
        case DELETE_FRIEND:
            return { ...state, friends: action.payload, updating: false, error: null };
        case DELETE_FAILURE:
            return { ...state, updating: false, error: action.payload };
        case UPDATE_SUCCESS:
            return { ...state, friends: action.payload, updating: false, error: null };
        case UPDATE_FAILURE:
            return { ...state, updating: false, error: action.payload };
        default:
            return state;
    }
}