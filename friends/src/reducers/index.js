import { combineReducers } from 'redux';
import { FETCH_FRIENDS } from '../actions';

const initialState = {
    friends: [
        {
            name: 'test friend',
            age: 0,
            email: 'test@test.com',
        }
    ],
}

const friends = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FRIENDS:
            return {
                ...state,
                friends: action.payload,
            }
        default:
            return state;
    }
}

export default combineReducers({ friends });