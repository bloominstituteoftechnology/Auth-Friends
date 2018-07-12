import { combineReducers } from 'redux';
import { FETCHING, FETCHED, SAVING, SAVED, UPDATING, UPDATED, DELETING, DELETED, ERROR } from '../actions';

const initialState = {
    fetching: false,
    fetched: false,
    saving: false,
    saved: false,
    updating: false,
    updated: false,
    deleting: false,
    deleted: false,
    friends: [],
    error: null
};

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING:
            return Object.assign({}, state, {
                fetching: !state.fetching
            });
        case FETCHED:
            return Object.assign({}, state, {
                fetching: !state.fetching,
                fetched: !state.fetched,
                friends: action.payload
            });
        case ERROR:
            return Object.assign({}, state, {
                error: action.payload
            });
        default:
            return state;
    }
};

export default combineReducers({
    friendsReducer
});