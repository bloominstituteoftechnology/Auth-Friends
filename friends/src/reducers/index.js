import { FETCHED, FETCHING, SAVING, SAVED, UPDATING, UPDATED, DELETING, DELETED, ERROR } from '../actions';

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
}

export const rootReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCHING:
            return Object.assign({}, state, {
                fetching: true,
                fetched: false
            })
        case FETCHED:
            return Object.assign({}, state, {
                fetched: true, 
                fetching: false, 
                friends: action.payload
            })
        case SAVING:
            return Object.assign({}, state, {
                saving: true,
                saved: false
            })
        case SAVED: 
            return Object.assign({}, state, {
                saving: false,
                saved: true,
                friends: state.friends.concat(action.payload)
            })
        case UPDATING:
            return Object.assign({}, state, {
                updating: true,
                updated: false
            })
        case UPDATED:
            return Object.assign({}, state, {
                updated: true,
                updating: false
            })
        case DELETING:
            return Object.assign({}, state, {
                deleted: false,
                deleting: true
            })
        case DELETED:
            return Object.assign({}, state, {
                deleted: true,
                deleting: false
            })
        case ERROR:
            return Object.assign({}, state, {
                fetching: false,
                editing: false,
                deleting: false,
                error: action.payload
            })
        default:
            return state;
    }
    
}