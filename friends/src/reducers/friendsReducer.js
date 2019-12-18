import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    ADD_FRIEND,
    UPDATE_FRIEND,
    SET_CURRENT,
    CLEAR_CURRENT,
    DELETE_FRIEND,
    CLEAR_ALERT

  } from '../actions';

const initialState ={
    friends: [{
        name: '',
        age: null,
        email: '',
        id: null

    }],
    isFetching: false,
    current: null,
    error: null
}

export default (state = initialState, action ) => {
    switch( action.type ) {

        case FETCH_START:
            return {
                ...state,
                isFetching: true

            }
        
        case FETCH_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                isFetching: false
            }
        
        case FETCH_FAILURE:
             return {
                 ...state,
                 error: action.payload,
                 isFetching: false
             }

        case ADD_FRIEND:
            return {
                ...state,
                friends: action.payload,
                isFetching: false
            }
        case UPDATE_FRIEND:  
            return {
                ...state,
                friends: action.payload,
                isFetching: false
            }

        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }

        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
        case DELETE_FRIEND:
            return {
                ...state,
                friends: action.payload,
                isFetching: false
            }
        case CLEAR_ALERT:
            return {
                ...state,
                error: null
            }
        default: 
            return state;
    }


}