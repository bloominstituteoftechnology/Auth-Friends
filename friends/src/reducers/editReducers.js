import { EDIT_FRIEND, EDIT_SUCCESS, EDIT_FAILURE } from '../actions';

const initialState = {
    updatingFriend: false,
    friendUpdated: false,
    friends: [],
    errors: null
}

export default (state= initialState, action) => {
    switch (action.type) {
        case EDIT_FRIEND:
            return Object.assign({}, state, {
                updatingFriend: true
            })
        case EDIT_SUCCESS:
            return Object.assign({}, state, {
                updatingFriend: false,
                friendUpdated: true,
                friends: [...state.friends, action.payload]
            })
        case EDIT_FAILURE:
            return Object.assign({}, state, {
                updatingFriend: false,
                friendUpdated: false,
                errors: [...state.errors, action.payload]
            })
        default:
            return state;
    }
}