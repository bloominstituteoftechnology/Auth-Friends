import { combineReducers } from 'redux';
import { 
    FETCH_FRIENDS_START,
    FETCH_FRIENDS_SUCCESS,
    FETCH_FRIENDS_FAILURE,
    ADD_FRIEND_START,
    ADD_FRIEND_SUCCESS,
    ADD_FRIEND_FAILURE, 
    } from '../actions';

const initialState = {
    friends: [],
    error: null,
    fetching: false,
}

const friends = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FRIENDS_START:
            return {
                ...state,
                fetching: true,
            }
        case FETCH_FRIENDS_SUCCESS:
            return {
                ...state,
                error: null,
                fetching: false,
                friends: action.payload,
            }
        case FETCH_FRIENDS_FAILURE:
            return {
                ...state,
                error: action.payload,
                fetching: false,
            }
        case ADD_FRIEND_START:
            return {
                ...state,
                fetching: true,
            }
        case ADD_FRIEND_SUCCESS:
            return {
                ...state,
                error: null,
                fetching: false,
                friends: action.payload,
            }
        case ADD_FRIEND_FAILURE:
            return {
                ...state,
                error: action.payload,
                fetching: false,
            }
        default:
            return state;
    }
}

export default combineReducers({ friends });