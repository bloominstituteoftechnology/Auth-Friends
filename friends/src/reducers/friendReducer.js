import { PENDING, ERROR, SUCCESS, UPDATING } from '../actions';

const initialState = {
    pending: false,
    error: null,
    friends: [],
    friend: {}
}

const friendReducer = (state = initialState, action) => {
    switch (action.type) {
        case PENDING:
            return Object.assign({}, state, { pending: true });
        case SUCCESS:
            return Object.assign({}, state, {
                friends: action.friends, 
                pending: false 
            });
        case ERROR:
            return Object.assign({}, state, {
                error: action.error, 
                pending: false 
            });
        case UPDATING:
            return Object.assign({}, state, {
                updating: true,
                friend: action.friend
            });
        default:
            return state;
    }

}

export default friendReducer;