import { PENDING_FRIENDS, SUCCESS_FRIENDS, ERROR_FRIENDS } from '../actions';

const initialState = {
    pending: false,
    error: null,
    friends: [],
};

const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
       case PENDING_FRIENDS:
        return Object.assign({}, state, { pending: true });
       case SUCCESS_FRIENDS:
        return Object.assign({}, state,{ 
            pending: false, 
            friends: [...state.friends, ...action.payload] });
       case ERROR_FRIENDS:
        return Object.assign({}, state, { 
            pending: false, 
            error: action.payload });
       default:
        return state;
    }
};

export default friendsReducer;