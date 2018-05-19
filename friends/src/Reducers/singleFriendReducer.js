import {
    SINGLE_FRIEND,
    TOGGLE_UPDATE_FRIEND
} from './Reducers/index.js';

const initialState = {
    friendSelected: {},
    showUpdate: false
};

export const singleFriendReducer = (state = initialState, action) => {
    switch (action.type) {
        case SINGLE_FRIEND:
            return Object.assign({}, state, {
                friendSelected: action.payload,
                showUpdate: false
            });
        case TOGGLE_UPDATE_FRIEND:
            return Object.assign({}, state, {
                showUpdate: !state.showUpdate 
            });
        default:
            return state;
    }
}; 