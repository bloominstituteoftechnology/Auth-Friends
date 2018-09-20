import {SELECT_FRIEND, TOGGLE_FRIEND} from '../actions';

const initialState = {
    selectedFriend: {},
    update: false
};

export const friendReducer = (state=initialState, action)=> {
    switch (action.type) {
        case SELECT_FRIEND:
            return {...state, selectedFriend: action.payload, update: false};
        case TOGGLE_FRIEND:
            return {...state, update: !state.update};
        default:
            return state;
    }
};