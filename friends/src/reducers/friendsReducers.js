import { PENDING, SUCCESS, ERROR } from '../actions';

const initialState = {
    friends: [],
    pending: false,
    success: false,
    error: null,
};

export const friendsReducers = (state = initialState, action) => {
    switch (action.type) {
        case PENDING:
            return Object.assign(
                {},
                state,
                { pending: true });
        case SUCCESS:
            return Object.assign(
                {},
                state,
                {
                    friends: [...action.payload],
                    success: true,
                    pending: false,
                    error: null
                }
            );
        case ERROR:
            console.error(action.payload);
            return Object.assign(
                {},
                state,
                {
                    pending: false,
                    success: false,
                    error: 'Error pending friends'
                }
            );
        default:
            return state;
    }
}