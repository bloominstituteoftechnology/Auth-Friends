import { UPDATING, FETCH_SUCCESS, FETCH_FAILURE, ADD_FRIEND, ADD_FAILURE, DELETE_FRIEND, DELETE_FAILURE } from '../actions';

const initialState = {
    friends: [],
    updating: true,
    error: null,
};

export const friendsReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATING:
            return { friends: state.friends, updating: true, error: state.error };
        case FETCH_SUCCESS:
            return { friends: action.payload, updating: false, error: null };
        case FETCH_FAILURE:
            return { friends: state.friends, updating: false, error: action.payload };
        case ADD_FRIEND:
            return { friends: action.payload, updating: false, error: null };
        case ADD_FAILURE:
            return { friends: state.friends, updating: false, error: null };
        case DELETE_FRIEND:
            return { friends: action.payload, updating: false, error: null };
        case DELETE_FAILURE:
            return { friends: state.friends, updating: false, error: null };
        default:
            return state;
    }
}