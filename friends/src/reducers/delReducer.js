import { DELETE_FRIEND, DELETE_SUCCESS, DELETE_FAILURE } from '../actions';

const initialState = {
    deletingFriend: false,
    friendDeleted: false,
    errors: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case DELETE_FRIEND:
            return Object.assign({}, state, {
                deletingFriend: true
            })
        case DELETE_SUCCESS:
            return Object.assign({}, state, {
                deletingFriend: false,
                friendDeleted: true
            })
        case DELETE_FAILURE:
            return Object.assign({}, state, {
                deletingFriend: false,
                friendDeleted: false,
                errors: [...state.errors, action.payload]
            })
        default :
            return state;
        }
    }